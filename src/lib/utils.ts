import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(phrase: string) {
  const words = phrase.split(/[^a-zA-Z0-9]/g);
  const wordsCapitalized: string[] = words.map((word) => {
    const firstLetter = word.slice(0, 1);
    const rest = word.slice(1);
    return firstLetter.toUpperCase() + rest.toLowerCase();
  });
  return wordsCapitalized.join(" ");
}
