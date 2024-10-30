import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] min-h-[400px]">
        <Image
          src="https://dummyimage.com/1920x1080/25a6be.png"
          alt="Beautiful Asian landscape"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">Explore the Wonders of Asia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10">Embark on unforgettable journeys through vibrant cultures, ancient traditions, and breathtaking landscapes</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Your Adventure
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {['Japan', 'Thailand', 'Vietnam'].map((country) => (
              <Card key={country} className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt={`${country} landscape`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-bold text-xl sm:text-2xl mb-2">{country}</h3>
                  <p className="text-muted-foreground mb-4">Discover the unique beauty and rich culture of {country}.</p>
                  <Button variant="outline">Explore {country}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: 'Sarah T.', quote: 'An incredible journey through Japan. Every moment was magical!' },
              { name: 'Michael L.', quote: 'Thailand\'s beaches and cuisine exceeded all my expectations.' },
              { name: 'Emma W.', quote: 'Vietnam\'s rich history and warm people made for an unforgettable trip.' }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-base sm:text-lg mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Begin Your Asian Adventure?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto">Join us for life-changing experiences across the diverse and beautiful continent of Asia.</p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Plan Your Journey Now
          </Button>
        </div>
      </section>
    </div>
  )
}
