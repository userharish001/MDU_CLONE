"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // This would normally send the email to an API
    setSubmitted(true)
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold tracking-tighter text-white">Stay Connected</h2>
      <p className="mt-2 text-white/80">
        Subscribe to our newsletter to receive updates on new products, special offers, and leather care tips.
      </p>

      {submitted ? (
        <div className="mt-6 flex items-center justify-center gap-2 text-white">
          <Check className="h-5 w-5" />
          <span>Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button type="submit" className="bg-blue text-white">
            Subscribe
          </Button>
        </form>
      )}

      <p className="mt-4 text-xs text-white/60">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </div>
  )
}
