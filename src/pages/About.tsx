import Img from '../components/Img'

export default function About() {
  return (
    <>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-ocean-deep md:text-5xl">
                About La Cassita
              </h1>
              <div className="space-y-4 text-lg leading-relaxed text-espresso-light">
                <p>
                  La Cassita de GL is a cozy beach escape tucked between whispering palms and the
                  rhythm of the tide. It was built for slow mornings, long lunches, and nights that
                  end with sandy feet and full hearts.
                </p>
                <p>
                  Every corner tells a story — driftwood gathered on sunrise walks, hammocks that
                  beg for an afternoon nap, and a kitchen that smells like citrus and fresh catch.
                  It’s a place where friends become family and the Wi-Fi is deliberately spotty.
                </p>
                <p>
                  Whether you’re here for a weekend or a whole season, the door is always open and
                  the cooler is always stocked. Welcome to the good life.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <Img
                src="/beach-palm.jpg"
                alt="Palm trees swaying by the beach"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              />
              <Img
                src="/beach-sunset.jpg"
                alt="Sunset over the ocean"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-light px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-ocean-deep">What to expect</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-cream p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 font-heading text-xl font-semibold text-coral">Slow mornings</h3>
              <p className="text-espresso-light">Coffee on the porch and waves as your alarm clock.</p>
            </div>
            <div className="rounded-2xl bg-cream p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 font-heading text-xl font-semibold text-coral">Sun-soaked days</h3>
              <p className="text-espresso-light">Beach towels, good books, and nowhere else to be.</p>
            </div>
            <div className="rounded-2xl bg-cream p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 font-heading text-xl font-semibold text-coral">Starry nights</h3>
              <p className="text-espresso-light">Dinner under the stars and playlists that last until dawn.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
