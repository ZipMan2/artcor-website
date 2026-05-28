import Image from 'next/image'
import Button from '../ui/Button'
import CoverImage from '../ui/CoverImage'

export default function Features() {
  return (
    <section className="w-full">
      <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 md:grid-cols-2">
        {/* RIGHT */}
        <div className="flex flex-col justify-center px-6 py-10 md:order-2 md:justify-start md:px-22 md:py-24 md:pl-13">
          <h3 className="mb-5 text-2xl sm:text-3xl md:text-3xl">
            Co nas wyróżnia?
          </h3>

          <p className="mb-2 text-sm leading-relaxed text-stone-700 sm:text-base md:mt-6">
            Oferujemy nasze długoletnie doświadczenie,
            wykwalifikowanych pracowników oraz cyfrowy park maszynowy
            do realizacji Państwa projektów oraz przetargów.
          </p>

          <p className="mb-5 text-sm leading-relaxed text-stone-700 sm:text-base">
            Ciągle się szkolimy i rozwijamy swoje umiejętności, a
            także technologię, z której korzystamy.
          </p>

          <p className="mb-5 text-sm leading-relaxed text-stone-700 sm:text-base md:mb-14">
            Żadne zlecenie nie stanowi dla nas przeszkód!
          </p>

          <span className="mb-6 text-sm font-medium text-stone-900 sm:text-xl md:mb-8">
            Szukasz sprawdzonego wykonawcy?
          </span>

          <Button text="Skontaktuj się" href="/kontakt" />
        </div>

        {/* LEFT */}
        <CoverImage src="/features-bg.png" alt="Meble kuchenne" />
      </div>
    </section>
  )
}
