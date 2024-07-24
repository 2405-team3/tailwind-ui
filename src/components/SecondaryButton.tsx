export function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-sm font-medium text-violet-600 px-4 py-2 rounded-md bg-white hover:text-violet-700 border-none">
      {children}
    </button>
  );
}
