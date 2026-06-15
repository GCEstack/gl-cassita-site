import Img from '../components/Img'

const memories = [
  { src: '/memories-dancing.jpg', caption: 'Dancing barefoot under the stars' },
  { src: '/memories-dinner.jpg', caption: 'Long dinners with salt in the air' },
  { src: '/memories-sunrise.jpg', caption: 'Sunrise walks before the world wakes' },
  { src: '/memories-walk.jpg', caption: 'Footprints that fade with the tide' },
  { src: '/beach-couple.jpg', caption: 'Together is our favorite place' },
  { src: '/beach-dune.jpg', caption: 'Golden dunes and endless sky' },
  { src: '/beach-foam.jpg', caption: 'Where the sea meets the shore' },
  { src: '/beach-palm.jpg', caption: 'Palm shade and ocean breeze' },
  { src: '/beach-shell.jpg', caption: 'Tiny treasures from the deep' },
  { src: '/beach-starfish.jpg', caption: 'Wishes washed ashore' },
  { src: '/beach-sunset.jpg', caption: 'Painted skies over La Cassita' },
]

export default function Memories() {
  return (
    <>
      <section
        className="relative flex h-[50vh] min-h-[320px] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/beach-sunset.jpg')" }}
      >
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative z-10 px-6 text-center">
          <h1 className="text-5xl font-bold text-cream md:text-6xl">Memories</h1>
          <p className="mt-4 text-lg text-cream/90">Collected moments from our little corner of paradise.</p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            {memories.map((item) => (
              <figure
                key={item.src}
                className="group relative overflow-hidden rounded-2xl bg-sand-light shadow-md transition hover:shadow-xl break-inside-avoid"
              >
                <Img
                  src={item.src}
                  alt={item.caption}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 to-transparent p-5 pt-12 text-left text-cream opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="font-heading font-medium">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
