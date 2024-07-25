export function LinkText({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="text-base font-normal text-violet-600">
      {children}
    </a>
  );
}
