import { Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer({
}: object) {
  return (
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
  )
}
