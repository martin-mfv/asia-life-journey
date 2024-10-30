'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Globe, Users, Shield, Clock } from 'lucide-react'

// Import the custom CSS file
import 'swiper/swiper-bundle.css'

const destinations = [
  { name: 'Vietnam', description: 'Explore the rich culture and stunning landscapes of Vietnam.' },
  { name: 'Thailand', description: 'Experience the vibrant street life and beautiful beaches of Thailand.' },
  { name: 'Laos', description: 'Discover the perfect blend of ancient traditions and modern technology in Laos.' },
  { name: 'Singapore', description: 'Marvel at the futuristic cityscape and diverse culinary scene in Singapore.' },
  { name: 'Campuchia', description: 'Adventure through the thousands of islands and unique cultures of Campuchia.' },
]
const tours = [
  { name: 'Thai Beach Paradise', duration: '7 days', price: '$1,599', image: 'https://dummyimage.com/400x300/25a6be.png', path: "/tours-1" },
  { name: 'Laos: Ancient and Modern', duration: '12 days', price: '$2,499', image: 'https://dummyimage.com/400x300/25a6be.png', path: "/tours-2" },
  { name: 'Singapore City Lights', duration: '5 days', price: '$1,299', image: 'https://dummyimage.com/400x300/25a6be.png', path: "/tours-3" },
  { name: 'Ha Long Bay', duration: '5 days', price: '$1,299', image: 'https://dummyimage.com/400x300/25a6be.png', path: "/tours-1" },
  { name: 'Sapa', duration: '5 days', price: '$1,299', image: 'https://dummyimage.com/400x300/25a6be.png', path: "/tours-4" },
]

const reasons = [
  { icon: Globe, title: 'Diverse Destinations', description: 'Explore multiple countries and unique cultures across Asia.' },
  { icon: Users, title: 'Expert Guides', description: 'Our team of experienced guides are well-versed in local cultures.' },
  { icon: Shield, title: 'Safety First', description: 'We prioritize our customers\' safety in every journey.' },
  { icon: Clock, title: 'Flexible Itineraries', description: 'Customize tours to your personal preferences and needs.' },
]

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
              <Link href="/plan-your-tour">
                Start Your Adventure
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Discover Our Destinations</h2>
          <div className="space-y-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/3">
                    <Image
                      src={`https://dummyimage.com/400x300/25a6be.png`}
                      alt={`${destination.name} landscape`}
                      width={400}
                      height={300}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className={`p-4 sm:p-6 md:w-2/3 flex flex-col justify-between ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div>
                      <h3 className="font-bold text-xl sm:text-2xl mb-2">{destination.name}</h3>
                      <p className="text-muted-foreground mb-4">{destination.description}</p>
                    </div>
                    <Button
                      variant="outline"
                      className={`self-start mt-4 ${index % 2 === 0 ? 'md:self-start' : 'md:self-end'}`}
                      asChild
                    >
                      <Link href={`/destinations/${destination.name.toLowerCase()}`}>
                        Explore {destination.name}
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative swiper-container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Travel Tours</h2>
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {tours.map((pack, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Link href={`${pack.path}`} className="flex items-center">
                    <Image
                        src={pack.image}
                        alt={pack.name}
                        width={400}
                        height={300}
                        layout="responsive"
                      />
                  </Link>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{pack.name}</h3>
                      <p className="text-gray-600 mb-2">{pack.duration}</p>
                      <p className="text-[#5191FA] font-bold">{pack.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <ChevronLeft className="text-white" size={24} />
            </div>
            <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
              <ChevronRight className="text-white" size={24} />
            </div>
          </div>
        </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6 text-center">
                  <reason.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
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
            <Link href="/plan-your-tour">
              Plan Your Journey Now
            </Link>
          </Button>
        </div>
      </section>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          background: #5191FA;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
        .swiper-button-prev svg,
        .swiper-button-next svg {
          width: 24px;
          height: 24px;
        }
        .swiper-pagination-bullet-active {
          background: #5191FA;
        }
      `}</style>
    </div>
  )
}
