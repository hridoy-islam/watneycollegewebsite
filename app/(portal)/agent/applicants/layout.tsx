/**
 * The applicant list and the applicant editor are long forms whose placeholders
 * carry example values, so they are read rather than skimmed past. The wrapper
 * turns every placeholder under this route black - see `.wc-black-placeholder`
 * in app/globals.css - and uses `display: contents`, so it adds no box of its
 * own to the layout.
 */
export default function AgentApplicantsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="wc-black-placeholder">{children}</div>;
}
