import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <main className="w-full">
      <section className="w-full">
        <div className="mx-auto flex max-w-[1200px] flex-col px-6 py-16 md:px-12">
          {/* Section 1 */}
          <h1 className="mb-2 text-3xl font-semibold">
            Kim jesteśmy?
          </h1>

          <p className="mb-4 max-w-2xl text-base leading-relaxed text-stone-700">
            Stworzymy dla Ciebie nowoczesną i funkcjonalną
            przestrzeń.
          </p>

          <Button
            text="Zobacz nasze realizacje"
            href="/galeria"
          />

          {/* Section 2 */}
          <h2 className="mt-6 mb-4 text-2xl font-semibold">
            Produkujemy nowoczesne meble
          </h2>

          <p className="mb-4 text-base leading-relaxed text-stone-700">
            <strong>ARTCOR</strong> tworzą doświadczeni,
            zaangażowani i kreatywni specjaliści w zakresie
            projektowania i produkcji mebli oraz przestrzeni
            własnej, a także usługowo–handlowej.
          </p>

          <p className="mb-4 text-base leading-relaxed text-stone-700">
            Naszą ofertę kierujemy głównie do firm oraz
            wszelkich placówek, ośrodków i lokali
            rozrywkowych, dla których wyposażenie powinno
            być spójne ze strategią marki i wspierać jej
            wizerunek, gdzie komfortowe, funkcjonalne
            wnętrza i nowoczesne meble z rozwiązaniami
            realizacyjnymi podkreślającymi charakter
            miejsca, zapewnią zadowolenie klientów i
            sprawią, że chętnie będą powracać.
          </p>

          <p className="mb-8 text-base leading-relaxed text-stone-700">
            Posiadamy też obszerną grupę klientów
            indywidualnych którym pomogliśmy zrealizować ich
            wymarzoną przestrzeń osobistą naznaczoną
            indywidualnością i niepowtarzalnym stylem.
            Zapewniamy całkowitą realizację zamówienia
            począwszy od fazy projektu, aż do jego
            sfinalizowania.
          </p>

          {/* Section 3 */}
          <h2 className="mb-4 text-2xl font-semibold">
            Jak działamy?
          </h2>

          <p className="mb-4 text-base leading-relaxed text-stone-700">
            Wychodząc naprzeciw zróżnicowanym potrzebom i
            gustom klientów oferujemy produkcję mebli we
            wszelkich stylach. Nasze usługi obejmują zarówno
            wykonanie projektu, produkcję mebli oraz ich
            transport i montaż.
          </p>

          <p className="mb-4 text-base leading-relaxed text-stone-700">
            Realizujemy również zlecenia według projektów
            autorskich. Podejmujemy się produkcji mebli
            wolnostojących, systemów ściennych, nowoczesne
            meble wyposażenia przestrzeni sklepowych(POS,
            SiS), stoisk targowych, hoteli, restauracji i
            wszelkich punktów usługowych. Zapraszamy do
            współpracy osoby indywidualne oraz firmy
            poszukujące sprawdzonego partnera biznesowego.
          </p>

          <p className="text-base leading-relaxed text-stone-700">
            Oferujemy nasze długoletnie doświadczenie,
            wykwalifikowanych pracowników oraz cyfrowy park
            maszynowy do realizacji Państwa projektów oraz
            przetargów.
          </p>
        </div>
      </section>
    </main>
  )
}
