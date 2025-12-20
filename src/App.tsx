import './App.css'
import Header from './components/Header'
import Hotbar from './components/Hotbar'
import MediaHero from './components/MediaHero'


function App() {

  return (
    <>
    <div className="app-topbar">
      <Header/>
      <Hotbar/>
    </div>
    <MediaHero foto="src/assets/solarired_logo.jpg"></MediaHero>
    <MediaHero foto="src/assets/solarired_logo.jpg"></MediaHero>
    <MediaHero foto="src/assets/solarired_logo.jpg"></MediaHero>
    <MediaHero foto="src/assets/solarired_logo.jpg"></MediaHero>
    </>
  )
}

export default App
