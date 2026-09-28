import React, { useState, useEffect } from 'react'
import './MediaHero.css'
import logo from '../assets/solarired_logo.jpg'

type MediaHeroProps = {
  foto?: string
  fotos?: string[]
  video?: string
  videos?: string[]
  className?: string
  overlayTitle?: string
  overlayText?: string
  fadeInterval?: number // milisegundos para el cambio de fotos
  showLogo?: boolean // Nuevo: mostrar logo sobre la imagen
}

const MediaHero: React.FC<MediaHeroProps> = ({
  foto,
  fotos,
  video,
  videos,
  className = '',
  overlayTitle = 'SOLARIRED',
  overlayText = 'Energía solar accesible y sostenible para un futuro mejor.',
  fadeInterval = 5000,
  showLogo = false
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
          alt={`Instalación de paneles solares fotovoltaicos en La Serena y Región de Coquimbo - Proyecto Solarired ${currentImageIndex + 1}`}
          loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      )
    }

    if (foto) {
      return (
        <img
          className="media-hero__image"
          src={foto}
          alt="Instalación de paneles solares fotovoltaicos en La Serena y Coquimbo"
          loading="eager"
          decoding="async"
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
          preload="metadata"
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
          preload="metadata"
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
        {showLogo && (
          <div className="media-hero__logo">
            <img
              src={logo}
              alt="Logo de Solarired - Paneles Solares La Serena Coquimbo"
              width="140"
              height="140"
            />
          </div>
        )}
        <h1 className="media-hero__title">
          <span className="media-hero__brand">
            {overlayTitle === 'SOLARIRED' ? (
              <>
                <span className="media-hero__title-solari">SOLARI</span>
                <span className="media-hero__title-red">RED</span>
              </>
            ) : (
              overlayTitle
            )}
          </span>
          <span className="media-hero__tagline">
            Instalación de Paneles Solares en La Serena y Coquimbo
          </span>
        </h1>
        <p className="media-hero__text">{overlayText}</p>
      </div>
    </section>
  )
}

export default MediaHero