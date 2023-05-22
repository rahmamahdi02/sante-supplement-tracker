import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListStudents from './components/ListStudents'
import Tracker from  './components/tracker'
import Calculator from  './components/calculator'
import MedicationTable from './components/medicationtracker'

import FactsheetComponent from './components/vitamincard'

function Dashboard() {

  return (
    <div className="Dashboard-Styling">
       < Calculator />
       < Tracker /> 
       < MedicationTable />
       <FactsheetComponent />
       <ListStudents />    
     

    </div>
  )
}

export default Dashboard
