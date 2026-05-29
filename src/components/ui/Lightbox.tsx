'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { LightboxProps } from '@/types/components'

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  // Touch swipe
  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  // Touch swipe
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNext()
      } else {
        onPrev()
      }
    }
    touchStartX.current = null
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  // Prevent scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="absolute top-0 right-0 left-0 flex items-center justify-between px-6 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Counter */}
        <span className="text-sm font-medium tracking-widest text-white/70">
          {currentIndex + 1} / {images.length}
        </span>
        {/* Close button */}
        <button
          onClick={onClose}
          className="cursor-pointer px-4 py-1 text-2xl text-white/70 transition hover:text-white"
          aria-label="Zamknij"
        >
          ✕
        </button>
      </div>

      {/* Left arrow  */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-6 z-30 hidden cursor-pointer border border-white p-5 text-5xl text-white/70 transition select-none hover:text-white md:left-20 md:block"
        aria-label="Poprzednie zdjęcie"
      >
        ‹
      </button>

      {/* Picture */}
      <div
        className="relative h-[80vh] w-[90vw] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentIndex]}
          alt={`Realizacja ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Right arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-6 hidden cursor-pointer border border-white p-5 text-5xl text-white/70 transition select-none hover:text-white md:right-20 md:block"
        aria-label="Następne zdjęcie"
      >
        ›
      </button>
    </div>
  )
}
