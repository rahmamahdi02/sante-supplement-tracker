import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'
import HomepageLayout from './components/HomepageLayout'
import Hero from  './components/Hero'
import About from './components/about'
import Tracker from  './components/tracker'
import Calculator from  './components/calculator'
import Footer from './components/footer';
import MedicationTable from './components/medicationtracker'
import SideProfile from './components/profile'
import Banner from './components/banner'
import FactsheetComponent from './components/vitamincard'
function App() {

  return (
    <div className="App">

      <MyNavBar />
         <Hero />
           < About />
           < SideProfile />
           < Banner />
< Calculator />
< Tracker /> 
< MedicationTable />
<FactsheetComponent />
        <ListStudents />    
      <Footer />

    </div>
  )
}

export default App
