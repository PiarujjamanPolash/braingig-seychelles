import { useState, type FormEvent } from "react";
import { format } from "date-fns";
import { ArrowRight, CalendarIcon, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/** Destination for every form submission */
const CONTACT_EMAIL = "braingigllc@gmail.com";

const Field = ({
  label,
  name,
  type = "text",
  required,
  className,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}) => (
  <div className={className}>
    <label htmlFor={name} className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-ink/60">
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      required={required}
      disabled={disabled}
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none disabled:opacity-60"
    />
  </div>
);

type SubmitState = "idle" | "loading" | "success";

export const ReservationForm = ({ compact = false }: { compact?: boolean }) => {
  const [date, setDate] = useState<Date | undefined>();
  const [status, setStatus] = useState<SubmitState>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — bots fill hidden fields; real users leave this empty
    if (String(formData.get("_gotcha") || "").trim()) {
      setStatus("success");
      return;
    }

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      brand: String(formData.get("brand") || "").trim(),
      website: String(formData.get("website") || "").trim() || "—",
      facebook: String(formData.get("facebook") || "").trim() || "—",
      address: String(formData.get("address") || "").trim() || "—",
      preferred_call_date: date ? format(date, "EEEE, MMMM do yyyy") : "Not specified",
      note: String(formData.get("note") || "").trim() || "—",
      _subject: `BrainGig enquiry — ${String(formData.get("name") || "Website form").trim()}`,
      _template: "table",
      _captcha: "false",
      _replyto: String(formData.get("email") || "").trim(),
    };

    setStatus("loading");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };

      if (!res.ok) {
        throw new Error(data.message || "Could not send your message. Please try again.");
      }

      // First-time activation: FormSubmit emails the inbox once to confirm forwarding
      if (typeof data.message === "string" && /activate|confirm/i.test(data.message)) {
        toast.message("Almost there", {
          description:
            "Check braingigllc@gmail.com for a one-time activation link from FormSubmit, then submit again.",
        });
        setStatus("idle");
        return;
      }

      setStatus("success");
      form.reset();
      setDate(undefined);
      toast.success("Message sent", {
        description: "We'll be in touch within 24 hours.",
      });
    } catch (err) {
      setStatus("idle");
      const message = err instanceof Error ? err.message : "Something went wrong.";
      toast.error("Could not send", {
        description: `${message} Or email us at ${CONTACT_EMAIL}`,
      });
    }
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-4 rounded-[2rem] bg-card p-6 shadow-soft md:p-8",
          compact ? "" : ""
        )}
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-teal">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">Thank you — message received.</h3>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            We got your details and will reply within 24 hours, usually with a first idea already sketched out.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-coral underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const busy = status === "loading";

  return (
    <form
      onSubmit={onSubmit}
      className={cn("grid gap-4 rounded-[2rem] bg-card p-6 shadow-soft md:p-8", compact ? "" : "md:grid-cols-2")}
      noValidate={false}
    >
      {/* Honeypot — leave empty */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <Field label="Your full name" name="name" required disabled={busy} />
      <Field label="Contact number" name="phone" type="tel" required disabled={busy} />
      <Field label="Email address" name="email" type="email" required disabled={busy} />
      <Field label="Business / Brand name" name="brand" required disabled={busy} />
      <Field label="Business website (optional)" name="website" disabled={busy} />
      <Field label="Facebook page link (optional)" name="facebook" disabled={busy} />
      <Field
        label="Business address"
        name="address"
        className={compact ? "" : "md:col-span-2"}
        disabled={busy}
      />

      <div className={compact ? "" : "md:col-span-2"}>
        <label className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-ink/60">
          Reserve a call
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              disabled={busy}
              className={cn(
                "flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-left text-sm transition-colors hover:border-coral disabled:opacity-60",
                !date && "text-muted-foreground"
              )}
            >
              {date ? format(date, "EEEE, MMMM do yyyy") : "Pick a date for our call"}
              <CalendarIcon className="h-4 w-4 text-coral" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className={compact ? "" : "md:col-span-2"}>
        <label htmlFor="note" className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-ink/60">
          Note (optional)
        </label>
        <textarea
          id="note"
          name="note"
          rows={3}
          disabled={busy}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none disabled:opacity-60"
        />
      </div>

      <button
        type="submit"
        disabled={busy}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 font-medium text-white shadow-coral transition-all hover:bg-coral-deep disabled:cursor-not-allowed disabled:opacity-70",
          compact ? "" : "md:col-span-2"
        )}
      >
        {busy ? (
          <>
            Sending…
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Book a discovery call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className={cn("text-center text-xs text-ink/45", compact ? "" : "md:col-span-2")}>
        Submissions are sent to {CONTACT_EMAIL}. We reply within 24 hours.
      </p>
    </form>
  );
};

export default ReservationForm;
