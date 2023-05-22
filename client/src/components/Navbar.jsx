import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/santelogo.png'
import { useAuth0 } from '@auth0/auth0-react';
const { logout, isAuthenticated, user} = useAuth0();


function MyNavBar(props) {

  return (
    <>
    
    <Navbar data-testid="navbar" bg="white" variant="light" sticky="top" >
      <Container>
        <Navbar.Brand href="/">
        <img
              src={Logo}
              height="30"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Nav.Link >Home</Nav.Link>
        <Nav.Link >About</Nav.Link>
        <Nav.Link >Contact</Nav.Link>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          {!isAuthenticated ? (<button onClick={() => loginWithRedirect()}>Log In</button>) : (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
              </button>)}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;