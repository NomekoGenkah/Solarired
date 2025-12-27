import './App.css'
import Header from './components/Header'
import Hotbar from './components/Hotbar'
import MediaHero from './components/MediaHero'


function App() {
  const fotos_po = [
    'src/assets/paneles2.jpeg',
    'src/assets/paneles.jpeg',
    'src/assets/paneles3.jpeg',
    'src/assets/panel.jpeg',
  ];

  return (
    <>
    <div className="app-topbar">
      <Header/>
      <Hotbar/>
    </div>
    <MediaHero fotos={fotos_po}></MediaHero>
    <MediaHero foto='src/assets/paneles.jpeg'/>
    <MediaHero foto="src/assets/solarired_logo.jpg"></MediaHero>
    <MediaHero foto="src/assets/solarired_logo.jpg"></MediaHero>
    <MediaHero foto="src/assets/solarired_logo.jpg"></MediaHero>
    <MediaHero foto="src/assets/solarired_logo.jpg"></MediaHero>
    </>
  )
}

export default App
