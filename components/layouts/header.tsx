'use client'

import { X, Menu } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header({
}: object) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
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
              <h1 className='font-bold'>Destinations</h1>
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
          <Link href="/tours" className="block md:inline-block py-2 px-4 text-gray-600 hover:text-primary"><h1 className='font-bold'>Tours</h1></Link>
          <Link href="/about" className="block md:inline-block py-2 px-4 text-gray-600 hover:text-primary"><h1 className='font-bold'>About</h1></Link>
          <Link href="/contact" className="block md:inline-block py-2 px-4 text-gray-600 hover:text-primary"><h1 className='font-bold'>Contact</h1></Link>
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
  )
}
