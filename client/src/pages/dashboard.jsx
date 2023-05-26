import Calculator from  '../components/calculator';
import Banner from '../components/banner';
import Footer from '../components/footer';
// import Tracker from  '../components/tracker';


// import SidebarComponent from '../components/sidebar';
import MedicationTable from '../components/medicationtracker';


function Dashboard() {

  return (
    
    <div className="Dashboard-Styling">

{/* <SidebarComponent /> */}


      <Banner />
       <Calculator />
       {/* < Tracker />  */}
       < MedicationTable /> 

     <Footer />

    </div>
    
  )
}

export default Dashboard
