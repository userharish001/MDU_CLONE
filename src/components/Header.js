"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"
import { Badge } from "@/components/ui/Badge"

export function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const cartItemCount = 3 // This would normally be fetched from a cart state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Sheet>
            <SheetTrigger aschild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                <Link href="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-lg font-medium">
                  Shop All
                </Link>
                <Link href="/bags" className="text-lg font-medium">
                  Bags
                </Link>
                <Link href="/wallet" className="text-lg font-medium">
                  Wallets
                </Link>
                <Link href="/accessories" className="text-lg font-medium">
                  Accessories
                </Link>
                <Link href="/about" className="text-lg font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">LUXELEATHER</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:bg-black hover:text-red-200 rounded-sm px-1 py-1">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:bg-black hover:text-red-200  rounded-sm px-1 py-1">
              Shop All
            </Link>
            <Link href="/bags" className="text-sm font-medium hover:bg-black hover:text-red-200 rounded-sm px-1 py-1">
              Bags
            </Link>
            <Link href="/wallet" className="text-sm font-medium hover:bg-black hover:text-red-200 rounded-sm px-1 py-1">
              Wallets
            </Link>
            <Link
              href="/accessories"
              className="text-sm font-medium hover:bg-black hover:text-red-200 rounded-sm px-1 py-1"
            >
              Accessories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:bg-black hover:text-red-200 rounded-sm px-1 py-1">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:bg-black hover:text-red-200 rounded-sm px-1 py-1">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {showSearch ? (
            <div className="relative flex items-center">
              <Input type="search" placeholder="Search products..." className="w-[200px] md:w-[300px]" autoFocus />
              <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setShowSearch(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
