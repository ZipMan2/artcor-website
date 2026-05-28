import Image from 'next/image'
import Link from 'next/link'

const galleryImages: string[] = [
  '/project-01.jpg',
  '/project-02.jpg',
  '/project-03.jpg',
  '/project-04.jpg',
]

export default function Gallery() {
  return (
    <section className="w-full bg-white py-2">
      {/* Images */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative h-[300px] w-full overflow-hidden md:h-[418px]"
          >
            <Image
              src={image}
              alt={`Realizacja ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              loading="lazy"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center px-6 pt-10 pb-10">
        <Link
          href="/galeria"
          className="bg-brand-beige px-5 py-3 text-sm font-medium tracking-widest text-black uppercase transition hover:opacity-90"
        >
          Pozostałe realizacje
        </Link>
      </div>
    </section>
  )
}
