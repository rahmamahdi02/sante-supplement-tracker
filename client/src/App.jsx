import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import MyNavBar from '../src/pages/Navbar'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ErrorPage from './components/error-page';
import Profile from './components/Profile';
import {useState } from 'react';

function App() {

  const { isAuthenticated, isLoading, user} = useAuth0();
  // const [userObj, setUserObj] = useState(null);

  // const sendUser = (user) => {
  //   //passes state variable to body
  //   fetch("/api/user", {
  //     //matches the route in the backend
  //     //, it sends a POST request to the "/api/user" endpoint with the user data in the request body.
  //     //{user:user}, changed this for proxy
  //     method: "POST", //post method to add resource to db
  //     body: JSON.stringify({ user }), //stringifying the user obj, body is set to a JSON-encoded string containing the user data.
  //     headers: {
  //       "Content-type": "application/json", //The headers are set to indicate that the content type of the request is JSON.
  //     },
  //   })
  //     .then((response) => response.json()) //we want to get the response convert to json
  //     .then((data) => {
  //       //get that data and
  //       console.log(data);
  //     });
  // };
  
  const router = createBrowserRouter(
    
    createRoutesFromElements(
      <Route path="/" element={<MyNavBar />}>

        {isAuthenticated ? (
          <Route index element={<Dashboard />} errorElement={<ErrorPage />} />
        ) : (
          <Route index element={<Home />} errorElement={<ErrorPage />} />
        )}
        <Route path="user-profile" element={<Profile />} />
        
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;


