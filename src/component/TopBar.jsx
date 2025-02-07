import { Navbar,Container, Nav, } from "react-bootstrap";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";
import logo from "../assets/logo.png"

const TopBar = () => {
    return (
      <>
        <Navbar expand="lg" style={{ backgroundColor: "#221f1f" }} className=" justify-content-between">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo Netflix" style={{ width: "100px", height: "55px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="text-light fw-bolder">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="text-secondary fw-bolder">
                  TV Shows
                </Nav.Link>
                <Nav.Link href="#link" className="text-secondary fw-bolder">
                  Movies
                </Nav.Link>
                <Nav.Link href="#link" className="text-secondary fw-bolder">
                  Recently Added
                </Nav.Link>
                <Nav.Link href="#link" className="text-secondary fw-bolder">
                  My List
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="d-flex align-items-center gap-3">
              <Search className="text-light fs-5" />
              <span className="text-light fw-bold">KIDS</span>
              <Bell className="text-light fs-5" />
              <PersonCircle className="text-light fs-5" />
            </div>
          </Container>
        </Navbar>
      </>
    );
}

export default TopBar;