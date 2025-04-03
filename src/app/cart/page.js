import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input";
import { Separator } from "@/components/ui/Separator";
import Header from '../components/header'
import Footer from '../components/footer'

export default function CartPage() {
  // This would normally be fetched from a cart state or API
  const cartItems = [
    {
      id: "1",
      name: "Premium Leather Weekender Bag",
      price: 249.99,
      quantity: 1,
      image: "/bag.jpg",
      color: "Brown",
    },
    {
      id: "2",
      name: "Minimalist Leather Wallet",
      price: 79.99,
      quantity: 2,
      image: "/walllet.jpg",
      color: "Black",
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="rounded-lg border overflow-hidden">
                  <div className="bg-muted p-4 hidden md:grid grid-cols-6 gap-4 font-medium">
                    <div className="col-span-3">Product</div>
                    <div className="text-center">Price</div>
                    <div className="text-center">Quantity</div>
                    <div className="text-right">Total</div>
                  </div>

                  {cartItems.map((item) => (
                    <div key={item.id} className="p-4 border-t first:border-t-0">
                      <div className="md:grid md:grid-cols-6 md:gap-4 md:items-center space-y-4 md:space-y-0">
                        <div className="md:col-span-3 flex items-center gap-4">
                          <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">Color: {item.color}</p>
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-red-500 md:hidden">
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>

                        <div className="md:text-center">
                          <div className="md:hidden text-sm font-medium text-muted-foreground">Price:</div>
                          <div>${item.price.toFixed(2)}</div>
                        </div>

                        <div className="md:text-center">
                          <div className="md:hidden text-sm font-medium text-muted-foreground">Quantity:</div>
                          <div className="flex items-center md:justify-center border rounded-md w-fit">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="md:text-right">
                          <div className="md:hidden text-sm font-medium text-muted-foreground">Total:</div>
                          <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-red-500 hidden md:inline-flex">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <Link href="/products" className="text-sm font-medium flex items-center hover:underline">
                    ← Continue Shopping
                  </Link>
                  <Button variant="outline">Update Cart</Button>
                </div>
              </div>

              <div>
                <div className="rounded-lg border p-6 space-y-6">
                  <h2 className="text-xl font-bold">Order Summary</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="coupon" className="text-sm font-medium">
                        Coupon Code
                      </label>
                      <div className="flex mt-1">
                        <Input id="coupon" placeholder="Enter coupon code" className="rounded-r-none" />
                        <Button className="rounded-l-none">Apply</Button>
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      Proceed to Checkout
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">Secure checkout powered by Stripe</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Button aschild>
                <Link href="/products">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
