'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Facebook, Menu, X } from 'lucide-react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <html lang="en">
      <head>
        <title>Asia Life Journey – Personalize your Asia experience journey</title>
      </head>
      <body className={inter.className}>
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Asia-Life-Journey-_-logo_ngang_100.png"
                alt="Asia Life Journey Logo"
                width={200}
                height={50}
                priority
              />
            </Link>
            <nav className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-50`}>
            <div className="relative group">
                <div className="block md:inline-flex py-2 px-4 text-gray-600 hover:text-primary cursor-pointer items-center gap-1">
                  Destinations
                </div>
                {/* Dropdown Menu with top chevron */}
                <div className="hidden group-hover:block md:absolute md:top-full left-1/2 md:-translate-x-1/2 w-48 pt-2">
                  {/* Chevron top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white transform rotate-45 border-l border-t border-gray-200"></div>
                  {/* Menu content */}
                  <div className="relative bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
                    <div className="py-2">
                      <Link href="/destinations/vietnam" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary">
                        Vietnam
                      </Link>
                      <Link href="/destinations/thailand" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary">
                        Thailand
                      </Link>
                      <Link href="/destinations/laos" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary">
                        LAOS
                      </Link>
                      <Link href="/destinations/campuchia" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary">
                        Campuchia
                      </Link>
                      <Link href="/destinations/singapore" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary">
                        Singapore
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/tours" className="block md:inline-block py-2 px-4 text-gray-600 hover:text-primary">Tours</Link>
              <Link href="/about" className="block md:inline-block py-2 px-4 text-gray-600 hover:text-primary">About</Link>
              <Link href="/contact" className="block md:inline-block py-2 px-4 text-gray-600 hover:text-primary">Contact</Link>
            </nav>
            <Button variant="outline" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="mb-2">Phone: +84 123 456 789</p>
                <a href="https://facebook.com" className="flex items-center text-blue-400 hover:text-blue-300">
                  <Facebook className="mr-2" />
                  Follow us on Facebook
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                  <li><Link href="/destinations" className="hover:text-gray-300">Destinations</Link></li>
                  <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                  <li><Link href="/plan-your-tour" className="hover:text-gray-300">Plan Your Journey</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Asia Life Journey</h3>
                <p>123 Travel Street, Ho Chi Minh City, Vietnam</p>
                <p>Email: info@asialife.journey</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>&copy; 2024 Asia Life Journey. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
