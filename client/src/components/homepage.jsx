import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from  './components/Hero'
import About from './components/about'
import Banner from './components/banner'

function Homepage() {

  return (
    <div className="Homepage-Styling">

         <Hero />
           < About />
           < Banner />   

    </div>
  )
}

export default Homepage
