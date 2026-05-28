import Image from 'next/image'
import React from 'react'
import Button from '../ui/Button'
import CoverImage from '../ui/CoverImage'

export default function Professionalism() {
  return (
    <section className="w-full">
      <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 md:grid-cols-2">
        {/* RIGHT */}
        <div className="flex flex-col justify-center px-6 py-10 md:order-2 md:justify-start md:px-24 md:py-37 md:pl-13">
          <h3 className="-mb-2 text-2xl sm:text-3xl md:text-3xl">
            Profesjonalizm
          </h3>

          <p className="mb-2 text-sm leading-relaxed text-stone-700 sm:text-base md:mt-6">
            Zapewniamy całkowitą realizację zamówienia począwszy od fazy projektu, aż do jego sfinalizowania.
          </p>

          <p className="mb-18 text-sm leading-relaxed text-stone-700 sm:text-base">
            Oferujemy Państwu nasze długoletnie doświadczenie i nowoczesną technologię.
          </p>

          <span className="mb-4 text-sm font-medium text-stone-900 sm:text-xl">
            Dowiedz się jak pracujemy
          </span>

          <Button text="O nas" href="/o-nas" />
        </div>

        {/* LEFT */}
        <CoverImage src="/professionalism-bg.jpg" alt="Meble w kuchni" />
      </div>
    </section>
  )
}
