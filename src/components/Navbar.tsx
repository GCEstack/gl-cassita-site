import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/memories', label: 'Memories' },
  { to: '/playlist', label: 'Playlist' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand-dark/20 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-heading text-2xl font-bold tracking-tight text-ocean-deep transition hover:text-coral"
          onClick={() => setOpen(false)}
        >
          La Cassita<span className="text-coral"> de GL</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative text-sm font-medium tracking-wide transition ${
                  isActive(link.to)
                    ? 'text-coral'
                    : 'text-espresso-light hover:text-ocean'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-coral transition-all ${
                    isActive(link.to) ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center gap-1.5 rounded-md p-2 text-espresso md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream transition-all duration-300 ease-in-out md:hidden ${
          open ? 'max-h-96 border-b border-sand-dark/20' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 py-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                  isActive(link.to)
                    ? 'bg-sand-light text-coral'
                    : 'text-espresso hover:bg-sand-light hover:text-ocean'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
