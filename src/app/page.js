import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import background from '../../public/background.jpg'

import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge";
import { FeaturedProducts } from "@components/featured-products";
import { ProductCategories } from "@components/product-categories";
import { Testimonials } from "@components/testimonials";
import { Newsletter } from "@components/newsletter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-[80vh] w-full">
            <Image
              src="/logoImage.jpg"
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center">
              <div className="max-w-3xl mx-auto space-y-4">
                <Badge className="bg-white text-black hover:bg-white/90">New Collection</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Elevate Your Style
                </h1>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                  Discover our premium collection of handcrafted products designed for the modern lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <Button size="lg" className="bg-black text-white hover:text-yellow-500 border ">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-black text-white hover:text-yellow-500 border">
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Featured Products</h2>
                <p className="text-muted-foreground mt-2">Our most popular items, handpicked for you.</p>
              </div>
              <Link href="/products" className="text-sm font-medium flex items-center gap-1 hover:underline">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <FeaturedProducts />
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Shop by Category</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Browse our curated collections designed to match your unique style and preferences.
              </p>
            </div>
            <ProductCategories />
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src={background} alt="Brand story" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2010, our brand has been dedicated to creating premium products that combine functionality,
                  aesthetics, and sustainability. Every item is thoughtfully designed and crafted with the highest
                  quality materials to ensure longevity and satisfaction.
                </p>
                <p className="text-muted-foreground">
                  We believe in responsible manufacturing and ethical business practices. Our commitment to
                  sustainability drives us to continuously innovate and improve our processes to minimize environmental
                  impact.
                </p>
                <Button variant="outline" className="mt-4">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">What Our Customers Say</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our customers have to say about their experience.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <Newsletter />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
