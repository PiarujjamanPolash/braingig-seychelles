export const CalendlyEmbed = () => (
  <div className="w-full overflow-hidden bg-background" style={{ minWidth: 320, height: 780 }}>
    <iframe
      src="https://calendly.com/braingig/hello?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=ff6b4a"
      width="100%"
      height="100%"
      frameBorder="0"
      title="Schedule a call with BrainGig"
      className="block h-full w-full"
    />
  </div>
);

export default CalendlyEmbed;
