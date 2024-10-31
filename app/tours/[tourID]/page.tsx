'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Check, X, Clock, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Import Swiper styles
import 'swiper/swiper-bundle.css'

// Mock data for the tour
const tourData = {
  name: "Phú Quốc Explorer",
  duration: "3 days",
  price: 599,
  images: [
    "https://dummyimage.com/800x600/25a6be.png&text=Phu+Quoc+Beach",
    "https://dummyimage.com/800x600/25a6be.png&text=Grand+World",
    "https://dummyimage.com/800x600/25a6be.png&text=Teddy+Bear+Museum",
    "https://dummyimage.com/800x600/25a6be.png&text=Venice+Show",
  ],
  includes: [
    "Hotel accommodation",
    "Daily breakfast",
    "Transportation",
    "English-speaking guide",
    "Entrance fees",
    "Meals as specified in the itinerary",
  ],
  excludes: [
    "International flights",
    "Personal expenses",
    "Travel insurance",
    "Optional activities and their fees",
    "Drinks during meals",
    "Tips for guide and driver",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Phu Quoc - Grand World Exploration",
      activities: [
        {
          time: "12:00",
          title: "Airport Transfer and Hotel Check-in",
          description: "Xe đón quý khách tại sân bay Phú Quốc đưa về khách sạn gửi hành lý (tùy thời điểm khách sạn có phòng sớm sẽ linh hoạt nhận phòng nghỉ ngơi). Sau đó tự do vui chơi và ăn trưa tự túc.",
          image: "https://dummyimage.com/1920x1080/25a6be.png&text=Phu+Quoc+Airport"
        },
        {
          time: "16:00",
          title: "Grand World Visit",
          description: "Xe đón khách tham quan khu phức hợp Grand World. Khám phá:",
          details: [
            "Công trình Tre",
            "Công viên Urban Park",
            "Khu phố đèn lồng Shanghai",
            "Du ngoạn dòng sông Venice (phí đi thuyền tự túc, giá vé 200.000d/vé)",
            "Thăm thú bảo tàng gấu Teddy - Teddy Bear Museum (Vé vào cổng tự túc, giá vé 200.000đ/vé)"
          ],
          image: "https://dummyimage.com/400x300/25a6be.png&text=Grand+World"
        },
        {
          time: "19:00",
          title: "Dinner and Evening Entertainment",
          description: "Quý khách thưởng thức Show diễn 'Tinh hoa Việt Nam' (vé tự túc, giá vé 300.000đ/vé). Đoàn dùng bữa tối tại nhà hàng.",
          image: "https://dummyimage.com/400x300/25a6be.png&text=Tinh+Hoa+Viet+Nam+Show"
        },
        {
          time: "21:00",
          title: "Venice Show and Return to Hotel",
          description: "Quý khách thưởng thức Show biển diễn hoàng tráng 'Sắc màu Venice'. Sau đó Xe điện đưa đoàn về khách sạn nghỉ ngơi.",
          image: "https://dummyimage.com/400x300/25a6be.png&text=Venice+Show"
        }
      ]
    },
    // ... other days ...
  ],
  experiences: [
    {
      title: "Grand World Complex",
      description: "Explore the magnificent Grand World complex, a world-class entertainment hub in Phu Quoc.",
      image: "https://dummyimage.com/400x300/25a6be.png&text=Grand+World"
    },
    {
      title: "Teddy Bear Museum",
      description: "Visit the charming Teddy Bear Museum, a unique attraction for all ages.",
      image: "https://dummyimage.com/400x300/25a6be.png&text=Teddy+Bear+Museum"
    },
    {
      title: "Venice-inspired Canal Cruise",
      description: "Take a romantic boat ride through the Venice-inspired canals of Grand World.",
      image: "https://dummyimage.com/400x300/25a6be.png&text=Venice+Canal"
    },
    {
      title: "Cultural Shows",
      description: "Experience the vibrant culture of Vietnam through spectacular shows like 'Tinh Hoa Viet Nam' and 'Sac Mau Venice'.",
      image: "https://dummyimage.com/1920x1080/25a6be.png&text=Cultural+Show"
    }
  ]
}

export default function TourDetailPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Gallery Slide Show */}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Thumbs]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: '.gallery-swiper-button-prev',
            nextEl: '.gallery-swiper-button-next',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          thumbs={{ swiper: thumbsSwiper }}
          className="h-[60vh] min-h-[400px]"
        >
          {tourData.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Tour image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="gallery-swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 rounded-full p-2" aria-label="Previous slide">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button className="gallery-swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 rounded-full p-2" aria-label="Next slide">
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </section>

      {/* Thumbnail Gallery */}
      <section className="bg-white py-4">
        <div className="container mx-auto px-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            className="thumbs-swiper"
          >
            {tourData.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="cursor-pointer">
                  <Image
                    src={image}
                    alt={`Tour thumbnail ${index + 1}`}
                    width={150}
                    height={100}
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{tourData.name}</h1>
        <p className="text-xl mb-8">Duration: {tourData.duration} | Price: ${tourData.price} per person</p>

        {/* Itinerary */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
            <Accordion type="single" collapsible className="w-full">
              {tourData.itinerary.map((day, index) => (
                <AccordionItem key={index} value={`day-${day.day}`}>
                  <AccordionTrigger>Day {day.day}: {day.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="relative pl-8 border-l-2 border-primary">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="mb-8 relative">
                          <div className="absolute -left-[25px] w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6 text-white" />
                          </div>
                          <div className="bg-white rounded-lg shadow-md p-4 ml-4">
                            <p className="font-semibold text-primary text-lg mb-2">{activity.time} - {activity.title}</p>
                            <p className="mb-4">{activity.description}</p>
                            {activity.details && (
                              <ul className="list-disc pl-5 mb-4">
                                {activity.details.map((detail, detailIndex) => (
                                  <li key={detailIndex}>{detail}</li>
                                ))}
                              </ul>
                            )}
                            {activity.image && (
                              <Image
                                src={activity.image}
                                alt={activity.title}
                                width={400}
                                height={300}
                                className="rounded-lg object-cover"
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Exciting Experiences */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Exciting Experiences in the Tour</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tourData.experiences.map((experience, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      width={150}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      {experience.title}
                    </h3>
                    <p className="text-gray-600">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Includes/Excludes */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Includes</h2>
              <ul className="space-y-2">
                {tourData.includes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Excludes</h2>
              <ul className="space-y-2">
                {tourData.excludes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <X className="w-5 h-5 text-red-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps Embed */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Tour Map</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250948.16669124225!2d103.80437082900882!3d10.229401939675766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78c62b49eda17%3A0x8aa79fbbdd72cdb!2zUGjDuiBRdeG7kWM!5e0!3m2!1svi!2s!4v1651121760509!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Booking Button */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/plan-your-tour">Book This Tour</Link>
          </Button>
        </div>
      </div>
    </div>

  )
}
