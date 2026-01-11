import './App.css'
import Header from './components/Header'
import Hotbar from './components/Hotbar'
import MediaHero from './components/MediaHero'
import Kits, { type KitItem } from './components/Kits'
//import Equipos, { type EquipoItem } from './components/Equipos'
//import { equiposData } from './equiposData'
import CartSidebar from './components/CartSidebar'
import Contact from './components/Contact'
import React from 'react'
import About from './components/About'

// Importar imágenes como módulos de Vite para máxima compatibilidad
import cabana from './assets/cabana.jpeg'
import casa from './assets/casa.jpeg'
import premium from './assets/premium.jpeg'
import video_reja from './assets/video_reja.mp4'

import instalado from './assets/instalado.jpeg'
import instalando from './assets/instalando.jpeg'
import panel from './assets/panel.jpeg'
import panel2 from './assets/panel2.jpeg'

function App() {
  const fotos_po = [
    instalado,
    casa,
    instalando,
    premium,
    panel,
    panel2,
    cabana
  ];

  const kitsData = [
    {
      id: 'kit-cabana',
      title: '🟡 KIT CABAÑA 3000 – Autonomía básica y segura',
      description: 'Ideal para cabañas, parcelas y casas pequeñas que necesitan energía estable todo el día.',
      price: 1990000,
      image: cabana
    },
    {
      id: 'kit-casa',
      title: '🔵 KIT CASA 5000 – El favorito para hogares',
      description: 'Ideal para casas que buscan reducir su cuenta de luz y tener respaldo solar día y noche.',
      price: 2550000,
      image: casa
    },
    {
      id: 'kit-pro',
      title: '🔴 KIT CASA PRO 8000 – Máxima potencia y rendimiento',
      description: 'Perfecto para casas grandes, emprendimientos o clientes que quieren un sistema sólido, potente y con monitoreo en tiempo real.',
      price: 4900000,
      image: premium
    }
  ]

  const [cartOpen, setCartOpen] = React.useState(false)
  const [cartItems, setCartItems] = React.useState<KitItem[]>([])

  const addToCart = (item: KitItem ) => {
    setCartItems((prev) => [...prev, item])
    setCartOpen(true)
  }

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id))
  }

  return (
    <>
    <div className="app-topbar">
      <Header/>
      <Hotbar onCartClick={() => setCartOpen(true)}/>
    </div>
    <MediaHero fotos={fotos_po} showLogo={true}></MediaHero>
    <About videoSrc={video_reja} />
    <Kits items={kitsData} onAddToCart={addToCart} />
    <Contact />
    <CartSidebar open={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onRemoveItem={removeFromCart} />
    </>
  )
}

export default App
