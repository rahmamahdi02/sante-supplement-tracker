import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'
import Hero from  './components/Hero'
import About from './components/about'
import Footer from './components/footer';
import Tracker from  './components/tracker';
import Calculator from './components/calculator';

// import Homepage from './components/Homepage'
// import HomepageLayout from './components/HomepageLayout'
// import { Button } from 'semantic-ui-react'

function App() {

  return (
    <div className="App">

      <MyNavBar />

         <Hero />

         {/* < Homepage /> */}


           < About />

           <Calculator />

           <Tracker />


        <ListStudents />
        
      
      <Footer />

{/* Sample Semantic UI Components */}
 {/* <HomepageLayout/> */}

    </div>
  )
}

export default App
