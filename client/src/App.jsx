import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import MyNavBar from '../src/pages/Navbar'
import Home from './pages/Home';
import Dashboard from './pages/dashboard';
import ErrorPage from './components/error-page';
// import Profile from './components/Profile';

function App() {

  const { isAuthenticated, isLoading, user} = useAuth0();

  const router = createBrowserRouter(
    
    createRoutesFromElements(
      <Route path="/" element={<MyNavBar />}>

        {isAuthenticated ? (
          <Route index element={<Dashboard />} errorElement={<ErrorPage />} />
        ) : (
          <Route index element={<Home />} errorElement={<ErrorPage />} />
        )}
        {/* <Route path="user-profile" element={<Profile />} /> */}
        
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;


