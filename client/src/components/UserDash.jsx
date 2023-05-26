import Calculator from  '../components/calculator';
import Banner from '../components/banner';
import MedicationTable from '../components/medicationtracker';
import { Segment } from 'semantic-ui-react';



function UserDash() {

  return (
    <div> 
    <div className="UserDash-Styling">

    <Segment basic centered>
      <Banner />
      </ Segment >
      <Segment basic centered > 
      
      <Calculator />

    
      </Segment>

       <Segment basic centered>

       < MedicationTable /> 

       </Segment>
       </div>

    </div>
 
    
  )
}

export default UserDash;