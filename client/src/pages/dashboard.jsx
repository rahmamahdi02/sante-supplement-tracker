import Tracker from  '../components/tracker';
import Calculator from  '../components/calculator';
import MedicationTable from '../components/medicationtracker';
function Dashboard() {

  return (
    
    <div className="Dashboard-Styling">

       <Calculator />
       < Tracker /> 
       < MedicationTable />
     

    </div>
  )
}

export default Dashboard
