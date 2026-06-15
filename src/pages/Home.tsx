import { Link } from 'react-router-dom'
import Img from '../components/Img'

const previewImages = [
  { src: '/beach-couple.jpg', alt: 'Couple on the beach' },
  { src: '/beach-dune.jpg', alt: 'Golden sand dunes' },
  { src: '/beach-palm.jpg', alt: 'Palm trees by the water' },
  { src: '/beach-shell.jpg', alt: 'Seashell on the sand' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-cassita-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/30 to-espresso/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 font-heading text-sm font-medium uppercase tracking-[0.2em] text-cream/80 md:text-base">
            Welcome to the coast
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-cream md:text-7xl">
            La Cassita de GL
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-cream/90 md:text-2xl">
            A sun-soaked beach house where the days are slow, the waves are steady, and every sunset feels like a private concert.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/memories"
              className="rounded-full bg-coral px-8 py-4 font-heading font-semibold text-cream shadow-lg transition hover:-translate-y-0.5 hover:bg-coral-light hover:shadow-xl"
            >
              Explore Memories
            </Link>
            <Link
              to="/playlist"
              className="rounded-full border-2 border-cream/80 px-8 py-4 font-heading font-semibold text-cream backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-cream hover:text-espresso"
            >
              Press Play
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-ocean-deep md:text-4xl">
            Welcome to Our Beach House
          </h2>
          <p className="text-lg leading-relaxed text-espresso-light">
            La Cassita is more than a place — it’s a feeling. Salt on your skin, coconut in the air,
            and the kind of quiet that only the ocean can teach. Come barefoot, leave your worries
            at the door, and let the tide reset your rhythm.
          </p>
        </div>
      </section>

      {/* Preview grid */}
      <section className="bg-cream-dark px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col items-end justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-ocean-deep md:text-4xl">
                Moments in the sun
              </h2>
              <p className="mt-2 text-espresso-light">A glimpse of life by the water.</p>
            </div>
            <Link
              to="/memories"
              className="rounded-full bg-ocean px-6 py-3 font-heading font-medium text-cream transition hover:bg-ocean-deep"
            >
              View the gallery
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {previewImages.map((img) => (
              <div
                key={img.src}
                className="group overflow-hidden rounded-2xl bg-sand-light shadow-md transition hover:shadow-xl"
              >
                <Img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="font-heading text-2xl font-medium italic leading-snug text-ocean md:text-4xl">
            “The beach is not always a place, sometimes it’s a feeling — and here, that feeling is home.”
          </blockquote>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-coral">
            See you at La Cassita
          </p>
        </div>
      </section>
    </>
  )
}
