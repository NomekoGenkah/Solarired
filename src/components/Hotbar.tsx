import React from 'react'
import './Hotbar.css'
import logo from '../assets/solarired_logo.jpg'

const Hotbar: React.FC = () => {
  return (
    <nav className="hotbar" aria-label="Hotbar de navegación">
      <div className="hotbar__content">
        <a href="#" className="hotbar__logo" aria-label="Inicio">
          <img src={logo} alt="Solarired" />
        </a>

        <ul className="hotbar__nav" role="menubar">
          <li className="nav-item" role="none">
            <button className="nav-link" role="menuitem">Home</button>
          </li>
          <li className="nav-item nav-item--dropdown" role="none">
            <button className="nav-link" role="menuitem" aria-haspopup="true" aria-expanded="false">
              Quiénes somos
            </button>
            <div className="dropdown" role="menu" aria-label="Submenú: Quiénes somos">
              <a href="#" className="dropdown__item" role="menuitem">Misión</a>
              <a href="#" className="dropdown__item" role="menuitem">Equipo</a>
              <a href="#" className="dropdown__item" role="menuitem">Historia</a>
            </div>
          </li>

          <li className="nav-item" role="none">
            <button className="nav-link" role="menuitem">Cotizador</button>
          </li>

          <li className="nav-item" role="none">
            <button className="nav-link" role="menuitem">Kits</button>
          </li>

          <li className="nav-item" role="none">
            <button className="nav-link" role="menuitem">Contacto</button>
          </li>

          <li className="nav-item" role="none">
            <button className="nav-link icon-only" role="menuitem" aria-label="Carrito">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.2 6l.8 2h10.55c.75 0 1.25.75 1.02 1.46l-1.62 5.02c-.2.63-.78 1.05-1.44 1.05H9.12c-.66 0-1.24-.42-1.44-1.05L5.25 4H3V2h2.73c.66 0 1.24.42 1.44 1.05L7.2 6z" />
              </svg>
            </button>
          </li>

          <li className="nav-item" role="none">
            <button className="nav-link icon-only" role="menuitem" aria-label="Buscar">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Hotbar
