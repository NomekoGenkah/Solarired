import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './FloatingWhatsApp.css'

const FloatingWhatsApp: React.FC = () => {
  const phone = '56931490321'
  const message = 'Hola Solarired, estoy visitando solarired.cl y quisiera cotizar una instalación de paneles solares para mi propiedad.'
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`

  return (
    <aside className="floating-whatsapp" aria-label="Contacto rápido por WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp__btn"
        aria-label="Cotizar por WhatsApp con Solarired"
      >
        <span className="floating-whatsapp__tooltip">¿Cotizar por WhatsApp? ¡Escríbenos!</span>
        <div className="floating-whatsapp__icon-wrap">
          <FaWhatsapp className="floating-whatsapp__icon" />
          <span className="floating-whatsapp__pulse" />
        </div>
      </a>
    </aside>
  )
}

export default FloatingWhatsApp
