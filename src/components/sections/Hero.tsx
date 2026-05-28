import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-88px)] items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Meble"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[20%_center] sm:object-center"
        />
        {/* <div className="absolute inset-0 bg-black/10" /> */}
      </div>

      {/* Content */}
      <div className="relative mx-auto px-6 w-full max-w-7xl">
        <div className="max-w-xl sm:max-w-2xl">
          <h1 className="mb-4 text-3xl sm:mb-6 sm:text-5xl">
            Nowoczesne meble w Twoim wnętrzu
          </h1>

          <p className="mb-6 text-base sm:mb-8 sm:text-lg">
            ARTCOR tworzą kreatywni i zaangażowani specjaliści.
          </p>

          <Link
            href="/galeria"
            className="inline-flex px-5 py-3 bg-brand-beige text-brand-black text-sm font-medium tracking-widest uppercase transition hover:opacity-90 sm:px-6"
          >
            Sprawdź realizacje
          </Link>
        </div>
      </div>
    </section>
  )
}
