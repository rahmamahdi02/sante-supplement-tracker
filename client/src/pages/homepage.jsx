import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import Family from "./pages/Family";
import Friends from "./pages/Friends";
import Root from "./pages/Root";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    children: [
      { index: true, element: <Home /> },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/family",
        element: <Family />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
    ],
    path: "/",
    element: <Root />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;