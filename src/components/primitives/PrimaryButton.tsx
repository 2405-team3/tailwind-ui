export function PrimaryButton({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className="bg-violet-600 text-sm text-white font-medium px-4 py-2 rounded-md hover:bg-violet-700 disabled:bg-slate-300 disabled:text-slate-400 disabled:pointer-events-none"
    >
      {children}
    </button>
  );
}
