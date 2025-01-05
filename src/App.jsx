import  Navbar  from './components/Navbar'
import { Hero } from './pages/Hero'
import './fonts.css'
import './index.css'
import {Benefits} from './pages/benefits'
import {Features} from './pages/features'


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
