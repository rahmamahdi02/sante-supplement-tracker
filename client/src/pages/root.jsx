import React from "react";
import { Outlet } from "react-router-dom";
import MyNavBar from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";

import Login from "./Login";

const Root = () => {

    // loginWithRedirect 
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {

    return "Loading";
  }
  return (
    <div className="Root-Setup">
      {isAuthenticated ? (
        <>

        <MyNavBar />

        <Outlet />
        </>
      ) : (
        <Login />
      )}

    </div>
  );
};

export default Root;