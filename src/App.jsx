import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './constants/Footer'

function App() {


  return (
      <div>
        <Navbar />
        <div className='max-w-7l max-auto pt-20 px-50'>
            <Hero />
            <Features />
            <Workflow />
            <Pricing />
            <Testimonial />
            <Footer />
        </div>
      
      </div>
  )
}

export default App
