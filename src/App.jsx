import  Navbar  from './components/Navbar'
import { Hero } from './pages/Hero'
import './App.css'
import Benefits from '../src/pages/Benefits'
import Features from './pages/Features'
import Advantages from '../src/pages/Advantages'
import AboutUs from './pages/AboutUs'
import Testimonials from './pages/Testimonials'


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
        <Testimonials/>
      </div>
    </>   
  )
}

export default App
