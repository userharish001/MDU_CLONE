import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import Header from '../components/header'
import Footer from '../components/footer';
import { RelatedProducts } from "@/components/related-products";

export default function ProductPage({ params }) {
  // This would normally fetch the product data based on the ID
  const product = {
    id: params.id,
    name: "Premium Leather Weekender Bag",
    price: 249.99,
    rating: 4.8,
    reviewCount: 124,
    description:
      "Our Premium Leather Weekender Bag is the perfect companion for your weekend getaways. Crafted from full-grain leather, this bag features a spacious main compartment, multiple interior pockets, and a detachable shoulder strap for versatile carrying options.",
    features: [
      "Full-grain leather construction",
      "Brass hardware with antique finish",
      "Cotton canvas lining",
      "Detachable, adjustable shoulder strap",
      'Interior laptop sleeve (fits up to 15")',
      'Dimensions: 22" x 12" x 10"',
    ],
    colors: ["Black", "Brown", "Tan"],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    inStock: true,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/products" className="hover:underline">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <section className="container px-4 md:px-6 py-6 md:py-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg border">
                <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-md border cursor-pointer">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

              <p className="text-muted-foreground">{product.description}</p>

              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <div
                      key={color}
                      className="relative h-10 w-10 rounded-full border cursor-pointer flex items-center justify-center"
                    >
                      <span className="text-xs">{color[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center border rounded-md w-fit">
                  <Button variant="ghost" size="icon" className="rounded-none">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">1</span>
                  <Button variant="ghost" size="icon" className="rounded-none">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="mr-2 h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="container px-4 md:px-6 py-10">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="py-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Product Details</h3>
                <p className="text-muted-foreground">
                  Our Premium Leather Weekender Bag is the perfect companion for your weekend getaways. Crafted from
                  full-grain leather, this bag features a spacious main compartment, multiple interior pockets, and a
                  detachable shoulder strap for versatile carrying options.
                </p>
                <p className="text-muted-foreground">
                  The bag is designed to meet airline carry-on requirements, making it ideal for short trips. The
                  durable construction ensures it will withstand the rigors of travel while developing a beautiful
                  patina over time.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="features" className="py-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 mr-2 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-6">
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Customer Reviews</h3>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold">{product.rating}</div>
                  <div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Based on {product.reviewCount} reviews</p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-6">
                  {/* Sample reviews - would be dynamically loaded */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">John D.</span>
                      <span className="text-sm text-muted-foreground">3 months ago</span>
                    </div>
                    <p>
                      Absolutely love this bag! The quality is exceptional and it's the perfect size for weekend trips.
                      The leather is beautiful and I can tell it will age wonderfully.
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">Sarah M.</span>
                      <span className="text-sm text-muted-foreground">1 month ago</span>
                    </div>
                    <p>
                      Great bag with plenty of room for a weekend away. The only reason I'm giving 4 stars instead of 5
                      is that I wish it had a few more interior pockets for organization.
                    </p>
                  </div>
                </div>
                <Button>Write a Review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Related Products */}
        <section className="container px-4 md:px-6 py-10 border-t">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <RelatedProducts />
        </section>
      </main>
      <Footer />
    </div>
  );
}
