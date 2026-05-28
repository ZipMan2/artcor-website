import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-light w-full border-t border-stone-200">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 py-10 md:grid-cols-3 md:px-12">
        {/* LEFT */}
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Artcor"
              width={180}
              height={60}
              className="mb-5 h-auto w-auto"
            />
          </Link>

          <p className="mb-2 text-sm text-stone-600">
            Copyright © {year} Artcor
          </p>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-start">
          <span className="mb-3 text-sm font-semibold tracking-widest uppercase">
            Kontakt
          </span>

          <a
            href="mailto:biuro@artcor.pl"
            className="mb-2 text-sm text-stone-700 transition hover:text-black"
          >
            <strong className="font-semibold">EMAIL:</strong> biuro@artcor.pl
          </a>

          <a
            href="tel:+48146585005"
            className="text-sm text-stone-700 transition hover:text-black"
          >
            <strong className="font-semibold">TELEFON:</strong> +48 14 658 50 05
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start">
          <span className="mb-3 text-sm font-semibold tracking-widest uppercase">
            Adres
          </span>

          <p className="text-sm leading-relaxed text-stone-700">
            ul. Antoniego Chwałkowskiego 16
            <br />
            32-700 Bochnia
            <br />
            Polska
          </p>
        </div>
      </div>
    </footer>
  )
}
