import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import ListStudents from './components/ListStudents';
import HomepageLayout from './components/HomepageLayout';
import Homepage from './components/Homepage';
import Hero from  './components/Hero';
import About from './components/about';
import { Button } from 'semantic-ui-react';

function App() {

  return (
    <div className="App">
      <MyNavBar />

      <Hero />

      < About />

< Homepage />

      <ListStudents />


{/* Sample Semantic UI Components */}
      <Button color = "red" >Standard</Button>
 {/* <HomepageLayout/> */}

    </div>
  )
}

export default App
