'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'

// Mock data for tours in Vietnam
const tours = [
  { id: 1, name: "Hanoi City Explorer", duration: "3 days", price: 299, image: "https://dummyimage.com/300x200/25a6be/fff&text=Hanoi", category: "City" },
  { id: 2, name: "Ha Long Bay Cruise", duration: "2 days", price: 199, image: "https://dummyimage.com/300x200/25a6be/fff&text=Ha+Long+Bay", category: "Nature" },
  { id: 3, name: "Sapa Trekking Adventure", duration: "4 days", price: 349, image: "https://dummyimage.com/300x200/25a6be/fff&text=Sapa", category: "Nature" },
  { id: 4, name: "Hoi An Ancient Town", duration: "2 days", price: 179, image: "https://dummyimage.com/300x200/25a6be/fff&text=Hoi+An", category: "Culture" },
  { id: 5, name: "Mekong Delta Experience", duration: "3 days", price: 259, image: "https://dummyimage.com/300x200/25a6be/fff&text=Mekong+Delta", category: "Nature" },
  { id: 6, name: "Ho Chi Minh City Tour", duration: "2 days", price: 189, image: "https://dummyimage.com/300x200/25a6be/fff&text=Ho+Chi+Minh+City", category: "City" },
  { id: 7, name: "Phu Quoc Island Getaway", duration: "4 days", price: 499, image: "https://dummyimage.com/300x200/25a6be/fff&text=Phu+Quoc", category: "Beach" },
  { id: 8, name: "Hue Imperial City", duration: "2 days", price: 199, image: "https://dummyimage.com/300x200/25a6be/fff&text=Hue", category: "Culture" },
  { id: 9, name: "Nha Trang Beach Holiday", duration: "3 days", price: 279, image: "https://dummyimage.com/300x200/25a6be/fff&text=Nha+Trang", category: "Beach" },
]

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('recommended')

  const filteredTours = tours.filter(tour =>
    tour.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    tour.price >= priceRange[0] && tour.price <= priceRange[1] &&
    (selectedCategories.length === 0 || selectedCategories.includes(tour.category))
  )

  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'duration') return parseInt(a.duration) - parseInt(b.duration)
    return 0 // 'recommended' or default
  })

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Search */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://dummyimage.com/1920x1080/25a6be.png"
          alt="Discover Vietnam"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-8">Discover the Beauty of Vietnam</h1>
          <div className="w-full max-w-4xl px-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Search tours in Vietnam..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow"
              />
              <Button size="lg" className="w-full sm:w-auto">Search</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="w-full lg:w-1/4">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Filters</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Price Range</h3>
                      <Slider
                        min={0}
                        max={500}
                        step={50}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-2"
                      />
                      <div className="flex justify-between">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Categories</h3>
                      {['City', 'Nature', 'Culture', 'Beach'].map((category) => (
                        <div key={category} className="flex items-center space-x-2 mb-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={(checked) => {
                              setSelectedCategories(
                                checked
                                  ? [...selectedCategories, category]
                                  : selectedCategories.filter((c) => c !== category)
                              )
                            }}
                          />
                          <label htmlFor={category} className="text-sm">{category}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tour Results */}
            <div className="w-full lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Tour Results</h2>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedTours.map(tour => (
                  <Card key={tour.id}>
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
                      <p className="text-lg font-bold">${tour.price}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full"><Link href='/tours/1'>View Details</Link></Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
