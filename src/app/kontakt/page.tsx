import Image from 'next/image'
import type { Metadata } from 'next'
import Input from '@/components/ui/Input'
import { contacts } from '@/constants/contacts'

export const metadata: Metadata = {
  title: `Kontakt — Artcor`,
  description:
    'Skontaktuj się z naszym działem sprzedaży lub wyślij zapytanie przez formularz.',
}

export default function ContactPage() {
  return (
    <main className="bg-white text-black">
      {/* SECTION 1 */}
      <section className="w-full py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 md:px-6 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden">
            <Image
              src="/contact.jpg"
              alt="Salon Artcor"
              width={800}
              height={600}
              className="h-[300px] w-full object-cover md:h-[600px]"
              loading="eager"
            />
          </div>

          <div>
            <h1 className="mb-6 text-3xl leading-tight font-light">
              Masz pytanie?
              <br />
              Skorzystaj z formularza.
            </h1>

            {/* Form */}
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Imię i nazwisko"
              />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Telefon" />
              <textarea
                rows={5}
                placeholder="Wiadomość"
                id="message"
                className={`placeholder:text-neutral-500' focus:border-blackresize-none w-full border border-neutral-700 px-4 py-3 text-sm transition outline-none`}
              />

              <button className="bg-brand-beige text-brand-black w-fit cursor-pointer px-6 py-3 text-sm font-medium tracking-widest uppercase transition hover:opacity-90">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="border-t border-neutral-200 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <h2 className="mb-4 text-2xl font-light md:text-3xl">
              Działy kontaktowe
            </h2>
            <p className="max-w-2xl text-neutral-500">
              Skontaktuj się bezpośrednio z odpowiednim
              działem firmy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="border border-neutral-200 p-4 transition hover:border-black md:p-6"
              >
                <h3 className="text-md mb-1 font-medium">
                  {contact.title}
                </h3>
                <p className="mb-6 text-sm text-neutral-500">
                  {contact.name}
                </p>

                <div className="space-y-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="block text-sm transition hover:text-neutral-500"
                  >
                    email: {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="block text-sm transition hover:text-neutral-500"
                  >
                    tel: {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
