import React from 'react'
import './CartSidebar.css'
import { type KitItem } from './Kits'

type CartSidebarProps = {
  open: boolean
  items: KitItem[]
  onClose: () => void
  onRemoveItem: (id: string) => void
}

const CartSidebar: React.FC<CartSidebarProps> = ({ open, items, onClose, onRemoveItem }) => {
  const handleQuote = () => {
    if (!items.length) return
    const grouped = items.reduce<Record<string, { title: string; unit: number; qty: number }>>((acc, it) => {
      if (!acc[it.id]) acc[it.id] = { title: it.title, unit: it.price, qty: 0 }
      acc[it.id].qty += 1
      return acc
    }, {})

    const lines = Object.values(grouped).map(({ title, unit, qty }) => {
      const lineTotal = unit * qty
      return `- ${title} x${qty} ($${lineTotal.toLocaleString('es-CL')})`
    })

    const total = items.reduce((sum, it) => sum + it.price, 0)
    const message = [
      'Hola, quiero cotizar los siguientes productos:',
      ...lines,
      `Total estimado: $${total.toLocaleString('es-CL')}`
    ].join('\n')

    const phone = '56936474422'
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }
  return (
    <div className={open ? 'cart-overlay cart-overlay--open' : 'cart-overlay'} aria-hidden={!open}>
      <div className="cart-sidebar" role="dialog" aria-modal="true" aria-label="Carrito de compras">
        <header className="cart-sidebar__header">
          <h3>Carrito</h3>
          <button className="cart-sidebar__close" onClick={onClose} aria-label="Cerrar carrito">✕</button>
        </header>

        <div className="cart-sidebar__body">
          {items.length === 0 ? (
            <p className="cart-empty">Tu carrito está vacío.</p>
          ) : (
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item__info">
                    <span className="cart-item__title">{item.title}</span>
                    <span className="cart-item__price">${item.price.toLocaleString()}</span>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Eliminar ${item.title} del carrito`}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="cart-sidebar__footer">
          <button className="cart-quote-btn" onClick={handleQuote} disabled={items.length === 0}>
            Cotizar
          </button>
        </footer>
      </div>
    </div>
  )
}

export default CartSidebar
