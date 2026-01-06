import './App.css'
import Header from './components/Header'
import Hotbar from './components/Hotbar'
import MediaHero from './components/MediaHero'
import Kits, { type KitItem } from './components/Kits'
import CartSidebar from './components/CartSidebar'
import React from 'react'


function App() {
  const fotos_po = [
    'src/assets/paneles2.jpeg',
    'src/assets/paneles.jpeg',
    'src/assets/paneles3.jpeg',
    'src/assets/panel.jpeg',
  ];

  const kitsData: KitItem[] = [
    {
      id: 'kit-basic',
      title: 'Kit Básico 1kW',
      description: 'Ideal para pequeños consumos: iluminación y carga de dispositivos.',
      price: 349000,
      image: 'src/assets/paneles.jpeg'
    },
    {
      id: 'kit-home',
      title: 'Kit Hogar 3kW',
      description: 'Cobertura para hogar estándar: refrigerador, TV y luces.',
      price: 899000,
      image: 'src/assets/paneles2.jpeg'
    },
    {
      id: 'kit-pro',
      title: 'Kit Pro 5kW',
      description: 'Para mayores demandas y equipos eléctricos adicionales.',
      price: 1499000,
      image: 'src/assets/paneles3.jpeg'
    },
    {
      id: 'kit-offgrid',
      title: 'Kit Off-Grid 2kW',
      description: 'Autonomía fuera de red con baterías incluidas.',
      price: 1199000,
      image: 'src/assets/panel.jpeg'
    }
  ]

  const [cartOpen, setCartOpen] = React.useState(false)
  const [cartItems, setCartItems] = React.useState<KitItem[]>([])

  const addToCart = (item: KitItem) => {
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
    <MediaHero fotos={fotos_po}></MediaHero>
    <Kits items={kitsData} onAddToCart={addToCart} />
    <CartSidebar open={cartOpen} items={cartItems} onClose={() => setCartOpen(false)} onRemoveItem={removeFromCart} />
    </>
  )
}

export default App
