import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'

export default function FooterCTA() {
  return (
    <section className="bg-brand-light w-full">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:px-12 md:py-14">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 text-sm font-medium tracking-widest text-stone-500 uppercase">
            Ciągle rozwijamy swoją technologię i umiejętności
          </span>

          <h3 className="mb-6 text-2xl leading-tight sm:text-4xl md:mb-8 md:text-4xl">
            Potrzebujesz wyceny projektu?
          </h3>

          <Button text="Napisz do nas" href="/kontakt" />
        </div>

        {/* RIGHT */}
        <div className="relative min-h-[220px] overflow-hidden sm:min-h-[320px] md:min-h-[420px]">
          <Image
            src="/footer-eu-funds.png"
            alt="Europejski Fundusze dla firmy Artcor"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
