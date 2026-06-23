import { Database, CircleDollarSign, Heart, ShoppingCart } from "lucide-react"
import type { SolutionIcon as SolutionIconName } from "@/lib/solutions"

const icons: Record<SolutionIconName, typeof Database> = {
  database: Database,
  "circle-dollar-sign": CircleDollarSign,
  heart: Heart,
  "shopping-cart": ShoppingCart,
}

interface SolutionIconProps {
  name: SolutionIconName
  className?: string
}

export function SolutionIcon({ name, className = "w-4 h-4" }: SolutionIconProps) {
  const Icon = icons[name]
  return <Icon className={className} />
}
