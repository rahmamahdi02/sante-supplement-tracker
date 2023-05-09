import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'
import HomepageLayout from './components/HomepageLayout'

import { Button } from 'semantic-ui-react'


function App() {

  return (
    <div className="App">
      <MyNavBar />

      <ListStudents />

      

    <Button color = "red" >Standard</Button>

 {/* <HomepageLayout/> */}

    </div>
  )
}

export default App
