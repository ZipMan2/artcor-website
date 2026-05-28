import Image from 'next/image'
import Button from '../ui/Button'
import CoverImage from '../ui/CoverImage'

export default function Products() {
  return (
    <section className="w-full">
      <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 md:grid-cols-2">
        {/* LEFT (TEXT) */}
        <div className="flex flex-col justify-center px-6 py-10 md:justify-start md:px-22 md:py-30 md:pl-30">
          <h2 className="mb-4 text-2xl sm:text-3xl">
            Produkujemy meble:
          </h2>

          <ul className="mb-10 list-inside list-disc space-y-0 text-sm text-stone-700 sm:text-base">
            <li>wolnostojące</li>
            <li>systemy ścienne</li>
            <li>meble wyposażenia przestrzeni sklepowej</li>
            <li>stoisk targowych</li>
            <li>hoteli</li>
            <li>restauracji</li>
            <li>punktów usługowych</li>
          </ul>

          <h4 className="mb-12 text-base font-medium sm:text-lg">
            Potrzebujesz czegoś wyjątkowego?
          </h4>

          <Button text="Skontaktuj się" href="/kontakt" />
        </div>

        {/* RIGHT */}
        <CoverImage src="/products-bg.jpg" alt="Wielki Bar" />
      </div>
    </section>
  )
}
