import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function generateRandomNumber(range: number): number {
  return Math.floor(Math.random() * range)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
