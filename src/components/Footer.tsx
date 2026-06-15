import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ocean-deep text-cream">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link to="/" className="font-heading text-2xl font-bold">
            La Cassita<span className="text-coral"> de GL</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-cream/80">
            <Link to="/" className="transition hover:text-coral">Home</Link>
            <Link to="/memories" className="transition hover:text-coral">Memories</Link>
            <Link to="/playlist" className="transition hover:text-coral">Playlist</Link>
            <Link to="/about" className="transition hover:text-coral">About</Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-cream/10 pt-8 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} La Cassita de GL. Built with sun, sand & good vibes.
        </div>
      </div>
    </footer>
  )
}
