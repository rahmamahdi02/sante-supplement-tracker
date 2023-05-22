import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar  from '../src/routes/Navbar'
import Home from './routes/Home';
import ErrorPage from './components/error-page'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Profile from './components/Profile';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MyNavBar />}>
      <Route index element={<Home />} errorElement={<ErrorPage />} />
      <Route path="user-profile" element={<Profile/>} />
    </Route>
  )
)


function App() {

  return (
    
    <RouterProvider router={router} />
  )
}

export default App