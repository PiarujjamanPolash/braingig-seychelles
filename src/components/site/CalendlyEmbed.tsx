import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const CalendlyEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "talk" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="w-full bg-background" style={{ minWidth: 320, height: 780 }}>
      <Cal
        namespace="talk"
        calLink="braingig/talk"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
      />
    </div>
  );
};

export default CalendlyEmbed;
