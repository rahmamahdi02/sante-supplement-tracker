import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/final_logo -2.png';
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, Link } from "react-router-dom";




function MyNavBar() {

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();










  //  //A function to handle the post request
  //  const addUserToDB = async (authUser) => {
  //   try {
  //     const userInfo = {
  //       user_id: authUser.sub,
  //       name: authUser.name,
  //       email: authUser.email,
  //       username: authUser.nickname,
  //       picture: authUser.picture,
  //     };
  //     const response = await fetch(`/api/users`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(userInfo),
  //     });
  //     const userAdded = await response.json();
  //     console.log(userAdded);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   addUserToDB(user);
  // }, [user, isAuthenticated]);

  // console.log("From Navbar", user);
  // console.log("From Navbar", isAuthenticated);



  

  return (
    <>
      <Navbar data-testid="navbar" bg="light" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              height="35"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />




          </Navbar.Brand>
          {/* {!user ? null : <Nav.Link to="/user-profile" as={Link}>{user.name}</Nav.Link>} */}

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          
            <Navbar.Text>
              {!isAuthenticated ? (<button className=" ui grey basic button" onClick={() => loginWithRedirect()}>Log In</button> ) : (<button className="ui red basic button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
              </button>)}

            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default MyNavBar;