/**
 * The auth screens are full bleed split screens (see `AuthShell`), so this
 * layout only exists to keep them grouped - it adds no chrome of its own.
 */
export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
