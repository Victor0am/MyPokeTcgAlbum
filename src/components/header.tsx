import React from "react";
import { cn } from "@/lib/utils";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-16 justify-between bg-black/65 border-b border-white/25 rounded-xs",
        className
      )}
    >
      {children}
    </header>
  );
}
