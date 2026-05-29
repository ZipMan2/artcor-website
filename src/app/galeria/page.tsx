'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/ui/Lightbox'
import { CATEGORIES, Category, GALLERY } from '@/constants/gallery'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Indywidualne')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const images = GALLERY[activeCategory]
  const total = images.length

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + total) % total))
  const nextImage = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % total))

  return (
    <main className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">

        {/* Buttons categorii */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm font-medium tracking-widest uppercase transition cursor-pointer  hover:opacity-90 ${
                activeCategory === category
                  ? 'bg-brand-beige text-brand-black'
                  : 'bg-transparent border border-stone-300 text-black hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:px-10 xl:grid-cols-4">
          {images.map((src, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className="relative group bg-neutral-100 cursor-pointer overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-[240px]  w-full">
                <Image
                  src={src}
                  alt={`Realizacja ${index + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Slider */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </main>
  )
}