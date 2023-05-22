import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from  './components/Hero'
import About from './components/about'
import Banner from './components/banner'

function Homepage() {

  return (
    <div className="App">

         <Hero />
           < About />
           < Banner />   

    </div>
  )
}

export default Homepage
