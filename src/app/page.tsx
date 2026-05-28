import Features from '@/components/sections/Features'
import Gallery from '@/components/sections/Gallery'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import Professionalism from '@/components/sections/Professionalism'
import Quote from '@/components/sections/Quote'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Products Section */}
      <Products />
      {/* Quote Section */}
      <Quote />
      {/* Gallery Section */}
      <Gallery />
      {/* Professionalism Section */}
      <Professionalism />
    </main>
  )
}
