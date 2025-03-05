import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
        <header>
        <Navbar>
        <Container style={{display:"flex", justifyContent:"center", alignItems: "space-between"}}>
          <Navbar.Brand href="#home" className='fs-1'>Navbar</Navbar.Brand>
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className='fs-3 me-3'>Home</Nav.Link>
            <Nav.Link href="#features" className='fs-3 me-3'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='fs-3 me-3'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </header>
    </>
  )
}

export default Header