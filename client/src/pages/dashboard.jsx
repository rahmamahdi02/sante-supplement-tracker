import Tracker from  '../components/tracker';
import Calculator from  '../components/calculator';
import MedicationTable from '../components/medicationtracker';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Vitamincard from '../components/vitamincard';

function Dashboard() {

  return (
    
    <div className="Dashboard-Styling">

      <Banner />
      < Vitamincard />
       <Calculator />
       < Tracker /> 
       < MedicationTable />
     <Footer />

    </div>
    
  )
}

export default Dashboard
