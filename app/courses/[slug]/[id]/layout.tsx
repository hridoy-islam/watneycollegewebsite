/**
 * Course application forms - the course page itself, the home student form and
 * the international student form. Their placeholders carry example values, so
 * the wrapper turns every placeholder under this route black - see
 * `.wc-black-placeholder` in app/globals.css - using `display: contents` so it
 * adds no box of its own to the layout.
 */
export default function CourseApplicationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="wc-black-placeholder">{children}</div>;
}
