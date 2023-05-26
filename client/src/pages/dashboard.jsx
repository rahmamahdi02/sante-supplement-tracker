import Calculator from  '../components/calculator';
import Banner from '../components/banner';
import Footer from '../components/footer';

// import SidebarComponent from '../components/sidebar';
// import Tracker from  '../components/tracker';
// import MedicationTable from '../components/medicationtracker';


function Dashboard() {

  return (
    
    <div className="Dashboard-Styling">

{/* <SidebarComponent /> */}
{/* < Tracker /> 
< MedicationTable /> */}

      <Banner />
       <Calculator />
     <Footer />

    </div>
    
  )
}

export default Dashboard
