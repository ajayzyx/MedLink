import  Navbar  from './components/Navbar'
import { Hero } from './pages/Hero'
import './index.css'
import {Benefits} from './pages/Benefits'
import {Features} from './pages/Features'


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Benefits />
        <Features />
      </div>
    </>   
  )
}

export default App
