import  Navbar  from './components/Navbar'
import { Hero } from './pages/Hero'
import './App.css'
import Benefits from '../src/pages/Benefits'
import Features from './pages/Features'
import Advantages from '../src/pages/Advantages'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Benefits />
        <Features />
        <Advantages/>
        <AboutUs/>
      </div>
    </>   
  )
}

export default App
