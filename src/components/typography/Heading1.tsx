import React from "react";

export function Heading1({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold my-4">{children}</h1>;
}
