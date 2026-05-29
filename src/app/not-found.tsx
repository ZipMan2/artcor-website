import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-brand-light flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 text-xl font-medium tracking-widest text-stone-400 uppercase">
        Błąd 404
      </span>

      <h1 className="text-brand-black mb-4 text-5xl font-light sm:text-5xl">
        Strona nie istnieje
      </h1>

      <p className="mb-10 text-sm leading-relaxed text-stone-500 sm:text-base">
        Strona, której szukasz, została przeniesiona lub nie
        istnieje.
      </p>

      <Link
        href="/"
        className="bg-brand-beige text-brand-black w-fit px-6 py-3 text-sm font-medium tracking-widest uppercase transition hover:opacity-90"
      >
        Wróć na stronę główną
      </Link>
    </main>
  )
}
