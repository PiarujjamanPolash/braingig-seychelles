import { useState } from "react";
import { format } from "date-fns";
import { ArrowRight, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const Field = ({ label, name, type = "text", required, className }: {
  label: string; name: string; type?: string; required?: boolean; className?: string;
}) => (
  <div className={className}>
    <label className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-ink/60">{label}</label>
    <input type={type} name={name} required={required}
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none" />
  </div>
);

export const ReservationForm = ({ compact = false }: { compact?: boolean }) => {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch within 24 hours."); }}
      className={cn("grid gap-4 rounded-[2rem] bg-card p-6 shadow-soft md:p-8", compact ? "" : "md:grid-cols-2")}
    >
      <Field label="Your full name" name="name" required />
      <Field label="Contact number" name="phone" type="tel" required />
      <Field label="Email address" name="email" type="email" required />
      <Field label="Business / Brand name" name="brand" required />
      <Field label="Business website (optional)" name="website" />
      <Field label="Facebook page link (optional)" name="facebook" />
      <Field label="Business address" name="address" className={compact ? "" : "md:col-span-2"} />
      <div className={compact ? "" : "md:col-span-2"}>
        <label className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-ink/60">Reserve a call</label>
        <Popover>
          <PopoverTrigger asChild>
            <button type="button" className={cn(
              "flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-left text-sm transition-colors hover:border-coral",
              !date && "text-muted-foreground"
            )}>
              {date ? format(date, "EEEE, MMMM do yyyy") : "Pick a date for our call"}
              <CalendarIcon className="h-4 w-4 text-coral" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate}
              disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
              initialFocus className={cn("p-3 pointer-events-auto")} />
          </PopoverContent>
        </Popover>
      </div>
      <div className={compact ? "" : "md:col-span-2"}>
        <label className="mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-ink/60">Note (optional)</label>
        <textarea name="note" rows={3}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-coral focus:outline-none" />
      </div>
      <button type="submit" className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-4 font-medium text-white shadow-coral transition-all hover:bg-coral-deep",
        compact ? "" : "md:col-span-2"
      )}>
        Book a discovery call
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
};

export default ReservationForm;
