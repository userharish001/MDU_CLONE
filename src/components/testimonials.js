import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/Card"

export function Testimonials() {
  // This would normally be fetched from an API
  const testimonials = [
    {
      id: "1",
      name: "John D.",
      avatar: "/person.jpg",
      rating: 5,
      text: "I've been using my leather weekender bag for over a year now, and it just keeps getting better with age. The quality is exceptional, and I receive compliments every time I travel.",
    },
    {
      id: "2",
      name: "Sarah M.",
      avatar: "/person2.jpg",
      rating: 5,
      text: "The attention to detail on my wallet is impressive. The stitching is perfect, and the leather has developed a beautiful patina. Worth every penny!",
    },
    {
      id: "3",
      name: "Michael T.",
      avatar: "/person3.jpg",
      rating: 4,
      text: "Great products and excellent customer service. The only reason I'm giving 4 stars instead of 5 is that shipping took a bit longer than expected, but the quality more than makes up for it.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{testimonial.name}</div>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground flex-1">"{testimonial.text}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
