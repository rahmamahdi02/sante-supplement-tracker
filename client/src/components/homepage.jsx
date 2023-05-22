import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/Navbar'
import Hero from  './components/Hero'
import About from './components/about'
import Footer from './components/footer';
import Banner from './components/banner'

function Homepage() {

  return (
    <div className="App">

      <MyNavBar />
         <Hero />
           < About />
           < Banner />   
      <Footer />

    </div>
  )
}

export default Homepage
