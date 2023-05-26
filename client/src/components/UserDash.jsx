import Calculator from  '../components/calculator';
import Banner from '../components/banner';
import MedicationTable from '../components/medicationtracker';


function UserDash() {

  return (
    <div> 
    <div className="UserDash-Styling">

      {/* <Banner /> */}
       <Calculator />
       < MedicationTable /> 
       </div>

    </div>
 
    
  )
}

export default UserDash;