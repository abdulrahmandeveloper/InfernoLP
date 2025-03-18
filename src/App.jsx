import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {


  return (
      <div>
        <Navbar />
        <div className='max-w-7l max-auto pt-20 px-50'>
            <Hero />
        </div>
      
      </div>
  )
}

export default App
