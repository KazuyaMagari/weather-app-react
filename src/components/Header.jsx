import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  return (
    <>
        <header className='mb-5'>
        <Navbar>
        <Container style={{display:"flex", justifyContent:"center", alignItems: "space-between"}}>
          <Navbar.Brand href="#home" className='fs-1'onClick={() => navigate("/")}>Weather App</Navbar.Brand>
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className='fs-3 me-3' onClick={() => navigate("/news")}>News</Nav.Link>
            <Nav.Link href="#pricing" className='fs-3 me-3'>AI forecast</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </header>
    </>
  )
}

export default Header