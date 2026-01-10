import './App.css'
import Header from './components/Header'
import Hotbar from './components/Hotbar'
import MediaHero from './components/MediaHero'
import Kits, { type KitItem } from './components/Kits'
import Equipos, { type EquipoItem } from './components/Equipos'
import { equiposData } from './equiposData'
import CartSidebar from './components/CartSidebar'
import Contact from './components/Contact'
import React from 'react'

// Importar imágenes como módulos de Vite para máxima compatibilidad
import paneles2 from './assets/paneles2.jpeg'
import paneles from './assets/paneles.jpeg'
import paneles3 from './assets/paneles3.jpeg'
import panel from './assets/panel.jpeg'

function App() {
  const fotos_po = [
    paneles2,
    paneles,
    paneles3,
    panel,
  ];

  const kitsData: KitItem[] = [
    {
      id: 'kit-basic',
      title: 'Kit Básico 1kW',
      description: 'Ideal para pequeños consumos: iluminación y carga de dispositivos.',
      price: 349000,
      image: paneles
    },
    {
      id: 'kit-home',
      title: 'Kit Hogar 3kW',
      description: 'Cobertura para hogar estándar: refrigerador, TV y luces.',
      price: 899000,
      image: paneles2
    },
    {
      id: 'kit-pro',
      title: 'Kit Pro 5kW',
      description: 'Para mayores demandas y equipos eléctricos adicionales.',
      price: 1499000,
      image: paneles3
    },
    {
      id: 'kit-offgrid',
      title: 'Kit Off-Grid 2kW',
      description: 'Autonomía fuera de red con baterías incluidas.',
      price: 1199000,
      image: panel
    }
  ]

  const [cartOpen, setCartOpen] = React.useState(false)
  const [cartItems, setCartItems] = React.useState<(KitItem | EquipoItem)[]>([])

  const addToCart = (item: KitItem | EquipoItem) => {
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
    <Kits items={kitsData} onAddToCart={addToCart} />
    <Equipos items={equiposData} onAddToCart={addToCart} />
    <Contact />
    <CartSidebar open={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onRemoveItem={removeFromCart} />
    </>
  )
}

export default App
