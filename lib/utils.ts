import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price)
}

export function calculatePricing(users: number, adSpend: number) {
  const basePrice = 29
  const userMultiplier = Math.max(1, users / 10)
  const spendMultiplier = Math.max(1, adSpend / 10000)
  
  return Math.round(basePrice * userMultiplier * spendMultiplier)
} 