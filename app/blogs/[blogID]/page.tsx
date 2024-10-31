import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HanoiFoodTourBlog() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://dummyimage.com/1920x1080/25a6be.png&text=Hanoi+Food+Tour"
          alt="Hanoi Food Tour"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Savoring Hanoi's Old Quarter</h1>
            <p className="text-xl sm:text-2xl md:text-3xl">A Culinary Journey Through Vietnam's Capital</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-4">Exploring Hanoi's Culinary Treasures</h2>
            <p className="text-lg mb-4">
              Hanoi's Old Quarter is a labyrinth of narrow streets and alleys, each hiding culinary gems that have been perfected over generations. Our food tour takes you through this gastronomic wonderland, offering a taste of authentic Vietnamese cuisine and the rich culture behind each dish.
            </p>
            <p className="text-lg">
              Join us as we navigate the bustling streets, savoring everything from steaming bowls of phở to crispy bánh mì, and discover why Hanoi is a food lover's paradise.
            </p>
          </CardContent>
        </Card>

        {/* Pho Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Phở - The Soul of Hanoi</h2>
              <p className="mb-4">
                Our journey begins with Vietnam's most iconic dish - phở. This aromatic beef noodle soup is a breakfast staple for locals and a must-try for visitors. We'll visit Phở Gia Truyen, a family-run establishment that has been serving their secret recipe for over 50 years.
              </p>
              <p>
                The rich, clear broth, tender slices of beef, and fresh herbs create a symphony of flavors that will awaken your taste buds and give you a true taste of Hanoi.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://dummyimage.com/600x400/25a6be.png&text=Pho"
                alt="A steaming bowl of Pho"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Banh Mi Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-6 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Bánh Mì - The Perfect Sandwich</h2>
              <p className="mb-4">
                Next, we'll sample the beloved bánh mì, a fusion of French and Vietnamese cuisines. At Bánh Mì 25, we'll watch as skilled hands assemble these delicious sandwiches, stuffing crispy baguettes with a variety of fillings.
              </p>
              <p>
                From classic pork and pâté to vegetarian options, each bánh mì is a perfect balance of flavors and textures, representing the cultural blend that makes Hanoi's cuisine unique.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://dummyimage.com/600x400/25a6be.png&text=Banh+Mi"
                alt="Freshly made Banh Mi"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Bun Cha Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Bún Chả - Hanoi's Lunchtime Favorite</h2>
              <p className="mb-4">
                As lunchtime approaches, we'll dive into a bowl of bún chả, a dish that Anthony Bourdain famously shared with President Obama. At Bún Chả Hương Liên, you'll experience the dish just as they did.
              </p>
              <p>
                Savor the smoky flavor of grilled pork belly and meatballs, served with rice noodles, fresh herbs, and a tangy dipping sauce. It's a taste of Hanoi that you won't soon forget.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://dummyimage.com/600x400/25a6be.png&text=Bun+Cha"
                alt="A serving of Bun Cha"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Egg Coffee Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-6 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Cà Phê Trứng - Egg Coffee</h2>
              <p className="mb-4">
                To round off our culinary adventure, we'll visit Café Giang, the birthplace of Hanoi's famous egg coffee. This unique beverage combines strong Vietnamese coffee with a creamy egg foam, creating a drink that's both a dessert and a caffeine kick.
              </p>
              <p>
                Sipping this rich concoction while overlooking the bustling streets of the Old Quarter is the perfect way to reflect on the flavors and experiences of the day.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://dummyimage.com/600x400/25a6be.png&text=Egg+Coffee"
                alt="A cup of Egg Coffee"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <Card className="mt-12">
          <CardContent className="p-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Taste Hanoi?</h2>
            <p className="text-lg mb-6">
              Join us on a culinary adventure through Hanoi's Old Quarter and experience the flavors that make this city a food lover's paradise.
            </p>
            <Button size="lg" asChild>
              <a href="/book-food-tour">Book Your Food Tour Now</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
