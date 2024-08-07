import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nadvar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/catalogo">Catalogo</Nav.Link>
            <Nav.Link href="/carrito">Carrito</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nadvar;