import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Asia Life Journey – Personalize your Asia experience journey',
    template: '%s | Asia Life Journey – Personalize your Asia experience journey'
  },
  description: 'Discover the beauty of Asia with Asia Life Journey. Explore our curated travel experiences and destinations.',
  keywords: ['Asia', 'travel', 'adventure', 'culture', 'destinations'],
  authors: [{ name: 'Asia Life Journey Team' }],
  creator: 'Asia Life Journey',
  publisher: 'Asia Life Journey',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asia-life-journey.vercel.app/',
    siteName: 'Asia Life Journey',
    title: 'Asia Life Journey – Personalize your Asia experience journey',
    description: 'Personalize your Asia experience journey',
    images: [
      {
        url: 'https://dummyimage.com/1200x630/25a6be.png',
        width: 1200,
        height: 630,
        alt: 'Asia Life Journey – Personalize your Asia experience journey',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
