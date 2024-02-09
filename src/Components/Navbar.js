// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "../CSS/navbar.css";
// import { Link } from "react-router-dom";
// function Navbar1() {
//   return (
//     <>
//       <Navbar className=" bar">
//         <Container className="navigation">
//           <Navbar.Brand href="/">Money Mingle</Navbar.Brand>
//           <Nav className="me-auto">
//             <Link className="link" to="/SipCalculator">
//               SipCalculator
//             </Link>
//             <Nav.Link className="link" to="/LumpSum">
//               LumpSum
//             </Nav.Link>

//             <Nav.Link className="link" to="/EmiCalculator">
//               EmiCalculator
//             </Nav.Link>
//             <Nav.Link className="link" to="/IncomeTax">
//               IncomeTax
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Navbar1;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap"; // Import LinkContainer from react-router-bootstrap
import "../CSS/navbar.css";

function Navbar1() {
  return (
    <>
      <Navbar className="bar">
        <Container className="navigation">
          <LinkContainer to="/">
            <Navbar.Brand>Money Mingle</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/SipCalculator">
              <Nav.Link className="link">SipCalculator</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/LumpSum">
              <Nav.Link className="link">LumpSum</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/EmiCalculator">
              <Nav.Link className="link">EmiCalculator</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/IncomeTax">
              <Nav.Link className="link">IncomeTax</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
