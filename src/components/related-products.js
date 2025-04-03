import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Star } from "lucide-react"

// import { Button } from "@/components/ui/button""
import { Card, CardContent, CardFooter } from "@/components/ui/Card"

export function RelatedProducts() {
  // This would normally be fetched from an API based on the current product
  const products = [
    {
      id: "2",
      name: "Minimalist Leather Wallet",
      price: 79.99,
      rating: 4.5,
      reviewCount: 86,
      image: "/bag.jpg",
    },
    {
      id: "3",
      name: "Classic Leather Belt",
      price: 59.99,
      rating: 4.7,
      reviewCount: 52,
      image: "/bag.jpg",
    },
    {
      id: "4",
      name: "Leather Laptop Sleeve",
      price: 89.99,
      rating: 4.6,
      reviewCount: 38,
      image: "/bag.jpg",
    },
    {
      id: "5",
      name: "Leather Keychain",
      price: 29.99,
      rating: 4.8,
      reviewCount: 24,
      image: "/bag.jpg",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden">
          <div className="relative aspect-square">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </Link>
            <div className="absolute top-4 right-4">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </div>
          <CardContent className="p-4">
            <Link href={`/products/${product.id}`} className="hover:underline">
              <h3 className="font-medium">{product.name}</h3>
            </Link>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
            <div className="mt-2 font-bold">${product.price.toFixed(2)}</div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" size="sm">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
