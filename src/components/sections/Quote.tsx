export default function Quote() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-16 text-center md:max-w-2xl md:py-14">
        <h3 className="mb-2 text-xl leading-relaxed font-medium sm:text-2xl md:text-4xl">
          “Wsłuchiwanie się w głos
          <br className="hidden sm:block" /> klientów powinno stać się
          <br className="hidden sm:block" /> biznesem każdej firmy.”
        </h3>

        <span className="text-sm font-medium text-stone-700 sm:text-base md:ml-auto md:block md:pr-6 md:text-lg">
          - Tom Peters
        </span>
      </div>
    </section>
  )
}
