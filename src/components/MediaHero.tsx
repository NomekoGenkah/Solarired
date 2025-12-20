import React, { useState, useEffect } from 'react'
import './MediaHero.css'

type MediaHeroProps = {
  foto?: string
  fotos?: string[]
  video?: string
  videos?: string[]
  className?: string
  overlayTitle?: string
  overlayText?: string
  fadeInterval?: number // milisegundos para el cambio de fotos
}

const MediaHero: React.FC<MediaHeroProps> = ({
  foto,
  fotos,
  video,
  videos,
  className = '',
  overlayTitle = 'Lorem Ipsum Dolor Sit Amet',
  overlayText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  fadeInterval = 5000
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [fadeClass, setFadeClass] = useState('fade-in')

  // Manejo de carousel de fotos con fade
  useEffect(() => {
    if (!fotos || fotos.length <= 1) return

    const interval = setInterval(() => {
      setFadeClass('fade-out')
      
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % fotos.length)
        setFadeClass('fade-in')
      }, 500) // Duración del fade out
    }, fadeInterval)

    return () => clearInterval(interval)
  }, [fotos, fadeInterval])

  // Manejo de videos múltiples
  const handleVideoEnd = () => {
    if (videos && videos.length > 1) {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }
  }

  // Determinar qué renderizar
  const renderMedia = () => {
    if (fotos && fotos.length > 0) {
      return (
        <img
          className={`media-hero__image ${fadeClass}`}
          src={fotos[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
        />
      )
    }

    if (foto) {
      return (
        <img
          className="media-hero__image"
          src={foto}
          alt="Imagen de fondo"
        />
      )
    }

    if (videos && videos.length > 0) {
      return (
        <video
          key={currentVideoIndex}
          className="media-hero__video"
          src={videos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      )
    }

    if (video) {
      return (
        <video
          className="media-hero__video"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      )
    }

    return null
  }

  return (
    <section className={`media-hero ${className}`}>
      <div className="media-hero__media" aria-hidden="true">
        {renderMedia()}
      </div>

      <div className="media-hero__overlay-dark" aria-hidden="true" />

      <div className="media-hero__content">
        <h1 className="media-hero__title">{overlayTitle}</h1>
        <p className="media-hero__text">{overlayText}</p>
      </div>
    </section>
  )
}

export default MediaHero


//import MediaHero from './components/MediaHero'

// Una foto
//<MediaHero foto="/images/solar1.jpg" />

// Carousel de fotos
//<MediaHero fotos={["/images/solar1.jpg", "/images/solar2.jpg", "/images/solar3.jpg"]} />

// Un video en loop
//<MediaHero video="/videos/hero.mp4" />

// Videos secuenciales
//<MediaHero videos={["/videos/intro.mp4", "/videos/panels.mp4"]} />