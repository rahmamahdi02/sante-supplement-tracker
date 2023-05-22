import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/Navbar'
import Homepage from './components/homepage';
// import Dashboard from './components/dashboard';
import ListStudents from './components/ListStudents'

import Footer from './components/footer';



function App() {

  return (
    <div className="App">

      <MyNavBar />
<Homepage />
{/* <Dashboard />  */}
<ListStudents />
      <Footer />

    </div>
  )
}

export default App
