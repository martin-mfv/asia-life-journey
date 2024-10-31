'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

const popularDestinations = [
  { name: "Hanoi", description: "Vietnam's capital city, known for its centuries-old architecture and rich culture with Southeast Asian, Chinese and French influences.", image: "https://dummyimage.com/800x600/25a6be.png&text=Hanoi" },
  { name: "Ha Long Bay", description: "A UNESCO World Heritage Site featuring thousands of limestone islands and islets rising from emerald waters, creating a breathtaking seascape.", image: "https://dummyimage.com/800x600/25a6be.png&text=Ha+Long+Bay" },
  { name: "Hoi An", description: "An ancient town that has preserved its charm with well-preserved architecture, colorful lanterns, and a rich trading history.", image: "https://dummyimage.com/800x600/25a6be.png&text=Hoi+An" },
  { name: "Ho Chi Minh City", description: "The largest city in Vietnam, offering a mix of modern life and war history, famous for its French colonial landmarks and vibrant street life.", image: "https://dummyimage.com/800x600/25a6be.png&text=Ho+Chi+Minh+City" },
]

const vietnamActivities = [
  { title: "Street Food Tour", description: "Explore the vibrant flavors of Vietnamese cuisine through a guided street food tour.", image: "https://dummyimage.com/300x200/25a6be.png&text=Street+Food" },
  { title: "Halong Bay Cruise", description: "Sail through the emerald waters of Halong Bay, exploring limestone islands and hidden caves.", image: "https://dummyimage.com/300x200/25a6be.png&text=Halong+Bay" },
  { title: "Mekong Delta Exploration", description: "Discover the rich culture and lush landscapes of the Mekong Delta region.", image: "https://dummyimage.com/300x200/25a6be.png&text=Mekong+Delta" },
  { title: "Sapa Trekking", description: "Embark on a trekking adventure through the terraced rice fields of Sapa.", image: "https://dummyimage.com/300x200/25a6be.png&text=Sapa+Trekking" },
  { title: "Hoi An Lantern Making", description: "Learn the art of traditional lantern making in the charming town of Hoi An.", image: "https://dummyimage.com/300x200/25a6be.png&text=Lantern+Making" },
]

export default function VietnamDestinationPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://dummyimage.com/1920x1080/25a6be.png&text=Vietnam"
          alt="Vietnam landscape"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">Discover Vietnam</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg mb-4">
            Vietnam is a Southeast Asian country known for its beautiful landscapes, rich history, and vibrant culture. From bustling cities to serene countryside, Vietnam offers a diverse range of experiences for travelers.
          </p>
          <p className="text-lg mb-4">
            Key highlights include the stunning Ha Long Bay, the ancient town of Hoi An, the vibrant capital Hanoi, and the bustling Ho Chi Minh City. Vietnam&apos;s cuisine is world-renowned, offering a perfect blend of flavors and fresh ingredients.
          </p>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="h-[400px] sm:h-[500px] md:h-[600px]"
            >
              {popularDestinations.map((destination, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-8">
                      <h3 className="text-3xl font-bold mb-4">{destination.name}</h3>
                      <p className="text-lg text-center max-w-2xl">{destination.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev !w-10 !h-10 !bg-white !bg-opacity-50 !rounded-full !text-primary !shadow-md after:!content-[''] flex items-center justify-center" aria-label="Previous slide">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next !w-10 !h-10 !bg-white !bg-opacity-50 !rounded-full !text-primary !shadow-md after:!content-[''] flex items-center justify-center" aria-label="Next slide">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Vietnam Activities */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Must-Try Activities in Vietnam</h2>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.activities-swiper-button-prev',
                nextEl: '.activities-swiper-button-next',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="h-[400px] sm:h-[450px]"
            >
              {vietnamActivities.map((activity, index) => (
                <SwiperSlide key={index}>
                  <Card className="h-full flex flex-col">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4 flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button variant="outline" className="w-full"><Link href={'/blogs/1'}>Learn More</Link></Button>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="activities-swiper-button-prev !w-10 !h-10 !bg-white !bg-opacity-50 !rounded-full !text-primary !shadow-md after:!content-[''] flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2 z-10" aria-label="Previous slide">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="activities-swiper-button-next !w-10 !h-10 !bg-white !bg-opacity-50 !rounded-full !text-primary !shadow-md after:!content-[''] flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2 z-10" aria-label="Next slide">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Suggested Tours */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Suggested Tours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Northern Vietnam Explorer", duration: "7 days", price: 899, image: "https://dummyimage.com/300x200/25a6be.png&text=Northern+Vietnam" },
              { name: "Central Vietnam Heritage", duration: "5 days", price: 699, image: "https://dummyimage.com/300x200/25a6be.png&text=Central+Vietnam" },
              { name: "Southern Vietnam Adventure", duration: "6 days", price: 799, image: "https://dummyimage.com/300x200/25a6be.png&text=Southern+Vietnam" },
            ].map((tour, index) => (
              <Card key={index}>
                <Image
                  src={tour.image}
                  alt={tour.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                  <p className="text-muted-foreground mb-2">Duration: {tour.duration}</p>
                  <p className="text-lg font-bold">From ${tour.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full"><Link href="/tours/2">View Details</Link></Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Explore Vietnam?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Embark on an unforgettable journey through Vietnam&apos;s rich culture, stunning landscapes, and vibrant cities.
          </p>
          <Button size="lg" variant="secondary">
            <Link href="/contact">Start Planning Your Trip</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
