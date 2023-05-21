import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Routes: Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      
    <App />

    <RouterProvider router={router} />
    
  </React.StrictMode>,
  
)
