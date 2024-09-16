import "./Topnav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function Topnav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CHRIS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features" >About</Nav.Link>
            <Nav.Link href="#pricing" >Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}


export default Topnav;
