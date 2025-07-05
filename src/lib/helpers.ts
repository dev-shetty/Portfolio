import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function generateRandomNumber(range: number): number {
  return Math.floor(Math.random() * range);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
