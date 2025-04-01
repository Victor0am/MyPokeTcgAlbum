import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { CircleUserRound } from "lucide-react";
import OpenMenuButton from "./open-menu-button";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-[5vh] justify-between bg-black/65 border-b border-white/25 rounded-xs z-10",
        className
      )}
    >
      <OpenMenuButton />
      <Button className="bg-black/50 size-auto w-1/20 border-black/50 border hover:bg-black/75">
        <CircleUserRound className="size-auto" />
      </Button>
    </header>
  );
}
