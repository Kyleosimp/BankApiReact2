import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Button } from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div className="app-main">
      <div className="shadow"></div>
      <div className="content col-10 col-sm-8 col-md-8 col-lg-4">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Link to="/transactions">
            <Button variant="outline-success">Transactions</Button>
            </Link>
            <Link to="/customers">
            <Button variant="outline-success">Customers</Button>
            </Link>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
