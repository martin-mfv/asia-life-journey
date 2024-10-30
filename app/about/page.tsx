import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Globe, Users, Shield, Link } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://dummyimage.com/1920x1080/25a6be.png"
          alt="About Asia Life Journey"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">About Asia Life Journey</h1>
            <p className="text-xl sm:text-2xl md:text-3xl">Crafting Unforgettable Asian Adventures</p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2010, Asia Life Journey was born out of a passion for sharing the rich tapestry of Asian cultures with the world. Our founders, seasoned travelers themselves, recognized the need for authentic, immersive experiences that go beyond typical tourist attractions.
            </p>
            <p className="text-lg mb-6">
              Over the years, we've curated a collection of journeys that showcase the best of Asia - from the bustling streets of Tokyo to the serene temples of Bali, and everything in between. Our mission is to create travel experiences that not only excite and inspire but also foster cultural understanding and personal growth.
            </p>
            <Button size="lg">Learn More About Our Journey</Button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Passion", description: "We're passionate about travel and sharing the wonders of Asia with our clients." },
              { icon: Globe, title: "Cultural Respect", description: "We promote understanding and respect for diverse cultures and traditions." },
              { icon: Users, title: "Customer Focus", description: "Our clients' satisfaction and experiences are at the heart of everything we do." },
              { icon: Shield, title: "Responsibility", description: "We're committed to sustainable and responsible travel practices." },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Jane Doe", role: "Founder & CEO", image: "/placeholder.svg?height=400&width=400&text=Jane" },
              { name: "John Smith", role: "Head of Operations", image: "/placeholder.svg?height=400&width=400&text=John" },
              { name: "Emily Chen", role: "Lead Travel Curator", image: "/placeholder.svg?height=400&width=400&text=Emily" },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Asian Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in exploring the wonders of Asia. Let's create unforgettable memories together.
          </p>
          <Button size="lg" variant="secondary">
            <Link href="/plan-your-tour">
                Plan Your Journey Now
              </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
