import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";
function Navbar1() {
  return (
    <>
      <Navbar className=" bar">
        <Container className="navigation">
          <Navbar.Brand href="/">Money Mingle</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link" to="/SipCalculator">
              SipCalculator
            </Link>
            <Nav.Link className="link" to="/LumpSum">
              LumpSum
            </Nav.Link>

            <Nav.Link className="link" to="/EmiCalculator">
              EmiCalculator
            </Nav.Link>
            <Nav.Link className="link" to="/IncomeTax">
              IncomeTax
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
