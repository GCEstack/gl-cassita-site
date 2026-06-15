import { useState } from 'react'

const fallbackSrc = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <rect fill="#EAE0D5" width="400" height="300"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#3B2F2F" font-family="sans-serif" font-size="18">La Cassita</text>
  </svg>`
)}`

interface ImgProps {
  src: string
  alt: string
  className?: string
}

export default function Img({ src, alt, className }: ImgProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  )
}
