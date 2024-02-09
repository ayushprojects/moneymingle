import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CSS/navbar.css";
function Navbar1() {
  return (
    <>
      <Navbar className=" bar">
        <Container className="navigation">
          <Navbar.Brand href="/">Money Mingle</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="link" href="/SipCalculator">
              SipCalculator
            </Nav.Link>
            <Nav.Link className="link" href="/LumpSum">
              LumpSum
            </Nav.Link>

            <Nav.Link className="link" href="/EmiCalculator">
              EmiCalculator
            </Nav.Link>
            <Nav.Link className="link" href="/IncomeTax">
              IncomeTax
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
