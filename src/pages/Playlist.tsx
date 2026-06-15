import { useState } from 'react'
import Img from '../components/Img'

interface Song {
  id: number
  title: string
  artist: string
  duration: string
}

const songs: Song[] = [
  { id: 1, title: 'Island in the Sun', artist: 'Cassita Collective', duration: '3:24' },
  { id: 2, title: 'Baiana', artist: 'Coastal Beats', duration: '4:01' },
  { id: 3, title: 'Costa del Sol', artist: 'Sundowners', duration: '3:47' },
  { id: 4, title: 'Cassita Vibes', artist: 'GL House Band', duration: '3:15' },
  { id: 5, title: 'Hammock Dreams', artist: 'Driftwood Orchestra', duration: '4:22' },
  { id: 6, title: 'Saltwater Serenade', artist: 'The Tides', duration: '3:58' },
  { id: 7, title: 'Palms at Dusk', artist: 'Laguna Sounds', duration: '3:33' },
  { id: 8, title: 'Barefoot & Free', artist: 'Shoreline Soul', duration: '3:50' },
]

export default function Playlist() {
  const [selected, setSelected] = useState<Song>(songs[0])
  const [playing, setPlaying] = useState(false)

  const toggleSong = (song: Song) => {
    if (selected.id === song.id) {
      setPlaying((prev) => !prev)
    } else {
      setSelected(song)
      setPlaying(true)
    }
  }

  return (
    <>
      <section
        className="relative flex h-[60vh] min-h-[360px] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/playlist-hammock-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/80 to-espresso/60" />
        <div className="relative z-10 px-6 text-center">
          <p className="mb-3 font-heading text-sm font-medium uppercase tracking-[0.2em] text-cream/80">
            The soundtrack
          </p>
          <h1 className="text-5xl font-bold text-cream md:text-6xl">Beach House Playlist</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream/90">
            Turn it up, kick back, and let the rhythm match the waves.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
          {/* Song list */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-cream-dark p-2 shadow-lg">
              <ul className="divide-y divide-sand-dark/20">
                {songs.map((song) => {
                  const isSelected = selected.id === song.id
                  const isPlaying = isSelected && playing
                  return (
                    <li
                      key={song.id}
                      className={`flex items-center justify-between gap-4 rounded-xl px-4 py-4 transition ${
                        isSelected ? 'bg-sand-light' : 'hover:bg-cream'
                      }`}
                    >
                      <div className="min-w-0">
                        <p className={`truncate font-heading font-semibold ${isSelected ? 'text-coral' : 'text-espresso'}`}>
                          {song.title}
                        </p>
                        <p className="truncate text-sm text-espresso-light">{song.artist}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="hidden text-sm text-espresso-light sm:inline">{song.duration}</span>
                        <button
                          type="button"
                          onClick={() => toggleSong(song)}
                          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ocean text-cream shadow transition hover:bg-ocean-deep hover:scale-105 focus:outline-none focus:ring-2 focus:ring-coral"
                          aria-label={isPlaying ? `Pause ${song.title}` : `Play ${song.title}`}
                        >
                          {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Now Playing */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl bg-ocean-deep text-cream shadow-xl">
              <div className="relative h-48">
                <Img
                  src="/playlist-hammock-bg.jpg"
                  alt="Now playing artwork"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-coral">
                  {playing ? 'Now playing' : 'Paused'}
                </p>
                <h2 className="mt-2 text-2xl font-bold">{selected.title}</h2>
                <p className="mt-1 text-cream/80">{selected.artist}</p>

                <div className="mt-6">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-cream/20">
                    <div
                      className="h-full rounded-full bg-coral transition-all duration-1000"
                      style={{ width: playing ? '75%' : '35%' }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-cream/60">
                    <span>1:12</span>
                    <span>{selected.duration}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPlaying((prev) => !prev)}
                  className="mt-6 w-full rounded-full bg-coral py-3 font-heading font-semibold transition hover:bg-coral-light"
                >
                  {playing ? 'Pause' : 'Play'} {selected.title}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
    </svg>
  )
}
