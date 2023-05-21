import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'
import HomepageLayout from './components/HomepageLayout'
// import Homepage from './components/Homepage'
import Hero from  './components/Hero'
import About from './components/about'
import Tracker from  './components/tracker'
import Calculator from  './components/calculator'
import Footer from './components/footer';
import { Button } from 'semantic-ui-react'
import MedicationTable from './components/medicationtracker'
import SideProfile from './components/profile'


function App() {

  return (
    <div className="App">

      <MyNavBar />

         <Hero />

         {/* < Homepage /> */}


           < About />
< Calculator />
< Tracker /> 
< MedicationTable />

< SideProfile />
        <ListStudents />

      
      <Footer />

{/* Sample Semantic UI Components */}
 {/* <HomepageLayout/> */}

    </div>
  )
}

export default App
