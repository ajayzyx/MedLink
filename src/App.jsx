import  Navbar  from './components/Navbar'
import { Hero } from './pages/Hero'
import './App.css'
import Benefits from '../src/pages/Benefits'
import Features from './pages/Features'
import Advantages from '../src/pages/Advantages'
import AboutUs from './pages/AboutUs'
import Testimonials from './pages/Testimonials'
import Comparison from './pages/Comparison'
import Footer from './pages/Footer'
import Questions from './pages/Questions'

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
        <Comparison/>
        <Questions/>
        <Footer/>
      </div>
    </>   
  )
}

export default App
