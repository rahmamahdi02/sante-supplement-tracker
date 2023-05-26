
import Footer from '../components/footer';
import Profile from '../components/sidebar';
import UserDash from '../components/UserDash';

// import Tracker from  '../components/tracker';
// import SidebarComponent from '../components/sidebar';

function Dashboard() {

  return (
    <div> 
    <div className="Dashboard-Styling">
< Profile />
< UserDash />
</div> 

     <Footer />

    </div>
 
    
  )
}

export default Dashboard