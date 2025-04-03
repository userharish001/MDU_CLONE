import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/Card"

export function ProductCategories() {
  // This would normally be fetched from an API
  const categories = [
    {
      id: "bags",
      name: "Bags",
      description: "Travel and everyday bags",
      image: "/bag.jpg",
    },
    {
      id: "wallets",
      name: "Wallets",
      description: "Slim and bifold wallets",
      image: "/wallet1.jpg",
    },
    {
      id: "accessories",
      name: "Accessories",
      description: "Belts, keychains, and more",
      image: "/belt.jpg",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/products/category/${category.id}`}>
          <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
            <div className="relative h-48">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="text-muted-foreground mt-1">{category.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
