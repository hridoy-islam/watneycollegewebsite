import type { LucideIcon } from 'lucide-react';

/** Small labelled value used across the portal cards. */
export function DetailTile({
  icon: Icon,
  label,
  value
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
      <Icon className="h-4 w-4 shrink-0 text-black" />
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wide text-black">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-black">{value}</p>
      </div>
    </div>
  );
}

export default DetailTile;
