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
  items: KitItem[]
  onAddToCart: (item: KitItem) => void
}

const Kits: React.FC<KitsProps> = ({ items, onAddToCart }) => {
  return (
    <section id="kits" className="kits" aria-labelledby="kits-title">
      <h2 id="kits-title" className="kits__title">Kits de Paneles Solares</h2>
      <div className="kits__grid">
        {items.map((kit) => (
          <article key={kit.id} className="kit-card" aria-label={kit.title}>
            {kit.image && (
              <img className="kit-card__image" src={kit.image} alt={kit.title} />
            )}
            <div className="kit-card__body">
              <h3 className="kit-card__title">{kit.title}</h3>
              <p className="kit-card__desc">{kit.description}</p>
              <div className="kit-card__footer">
                <span className="kit-card__price">${kit.price.toLocaleString()}</span>
                <button
                  className="kit-card__add"
                  onClick={() => onAddToCart(kit)}
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
