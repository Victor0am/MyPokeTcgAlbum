"use client";
import { useMenuStore } from "@/store/menuStore";
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function OpenMenuButton() {
  const { toggleOpen } = useMenuStore();
  return (
    <Button
      className="bg-black/50 size-auto w-1/20 border-black/50 border hover:bg-black/75"
      onClick={() => toggleOpen()}
    >
      <Menu className="size-auto" />
    </Button>
  );
}
