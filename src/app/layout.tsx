import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Poppins } from 'next/font/google'

import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'

const mainFontFamily = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Plasticor',
  description: 'Plasticor Brindes Indústria e Comércio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/homepage/logo.png" type="image/x-icon" />
        
      </head>
      <body className={mainFontFamily.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
