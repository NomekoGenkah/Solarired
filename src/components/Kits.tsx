import React from 'react'
import './Kits.css'

export type KitItem = {
  id: string
  title: string
  description: string
  price: number
  image?: string
}

type KitsProps = {
  items: { id: string; title: string; description: string; price: number; image: string }[]
  onAddToCart: (item: KitItem) => void
}

const Kits: React.FC<KitsProps> = ({ items, onAddToCart }) => {
  return (
    <section id="kits" className="kits" aria-labelledby="kits-title">
      <h2 id="kits-title" className="kits__title">Kits Solares</h2>
      <div className="kits__grid">
        {items.map((kit) => (
          <article key={kit.id} className="kit-card">
            <img className="kit-card__image" src={kit.image} alt={kit.title} />
            <div className="kit-card__body">
              <h3 className="kit-card__title">{kit.title}</h3>
              <p>{kit.description}</p>
              <ul className="kit-card__desc" style={{ textAlign: 'left' }}>
                {kit.id === 'kit-cabana' && (
                  <>
                    <li>5 paneles solares de 540W</li>
                    <li>1 inversor de 3000W</li>
                    <li>1 batería de litio 3000W</li>
                    <li>Kit de montaje con rieles</li>
                    <li>Tablero de protección AC/DC</li>
                    <li>Conmutador Solar / Red (permite alternar fácilmente)</li>
                  </>
                )}
                {kit.id === 'kit-casa' && (
                  <>
                    <li>7 paneles solares de 580W</li>
                    <li>1 inversor 6000W PV</li>
                    <li>1 batería de litio 5000W</li>
                    <li>Kit rieles montaje techo</li>
                    <li>Tablero de protecciones AC/DC</li>
                    <li>Conmutador Solar / Red</li>
                  </>
                )}
                {kit.id === 'kit-pro' && (
                  <>
                    <li>12 paneles solares 585W</li>
                    <li>Inversor 8000W</li>
                    <li>Batería de litio 10.000W</li>
                    <li>Kit completo de montaje</li>
                    <li>Tablero de protección AC/DC</li>
                    <li>Conmutador Solar / Red</li>
                    <li>Medidor digital WiFi (monitorea desde tu celular)</li>
                  </>
                )}
              </ul>
              {kit.id === 'kit-cabana' && (
                <p>Perfecto para iluminación, refrigerador eficiente, TV, cargadores y pequeños electrodomésticos.</p>
              )}
              {kit.id === 'kit-casa' && (
                <p>Potencia suficiente para refrigerador, TV, bombas pequeñas, iluminación, router, lavadora y más.</p>
              )}
              {kit.id === 'kit-pro' && (
                <p>Un kit de alto desempeño para consumos exigentes: electrodomésticos pesados, bombas, computadores, sistemas completos de hogar y más.</p>
              )}
              <div className="kit-card__footer">
                <span className="kit-card__price"> ${kit.price.toLocaleString()}</span>
                <button
                  className="kit-card__add"
                  onClick={() => onAddToCart(kit as KitItem)}
                  aria-label={`Añadir ${kit.title} al carrito`}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Kits
