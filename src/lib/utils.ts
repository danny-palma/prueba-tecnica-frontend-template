import { Product } from "@/types"

export function expensiveCalculation(items: Product[]) {
  return items.map((it) => ({
    ...it,
    complexScore: (it.price * 0.1) + (it.stock * 0.01),
  }));
}