export function EmptyState({
  title,
  description,
  action
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
      <p className="font-medium text-gray-800">{title}</p>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      {action}
    </div>
  );
}

export default EmptyState;
