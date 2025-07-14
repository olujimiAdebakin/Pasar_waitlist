import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openWhatsAppChat(phone: string, message?: string) {
  const base = `https://wa.me/${phone}`;
  const url = message ? `${base}?text=${encodeURIComponent(message)}` : base;
  window.open(url, "_blank");
}
