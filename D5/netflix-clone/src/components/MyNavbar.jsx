import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Search, BellFill, PersonFill, GridFill, Grid3x3GapFill } from 'react-bootstrap-icons';


class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar className="color-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <img className="MyBrand" src="assets/logo.png" alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#tv">TV Shows</Nav.Link>
                                <Nav.Link href="#movie">Movies</Nav.Link>
                                <Nav.Link href="#recently">Recently Added</Nav.Link>
                                <Nav.Link href="#list">My List</Nav.Link>
                            </Nav>

                            <Nav className="flex-row justify-content-evenly">
                                <Nav.Link className="text-light" href="#deets"><Search></Search></Nav.Link>
                                <Nav.Link className="text-light" href="#memes"> KIDS </Nav.Link>
                                <Nav.Link className="text-light" href="#notifications"><BellFill></BellFill></Nav.Link>
                                <Nav.Link className="text-light" href="#user"><PersonFill></PersonFill></Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Navbar className="color-nav" bg="dark" >
                    <Container className="justify-content-between" fluid >
                        <Navbar.Brand className="d-flex align-items-center" href="#home">
                            <h2 className="text-light">TV Shows</h2>
                    <NavDropdown className="text-light ms-4" title="Genres" id="navDropdown">
                        <NavDropdown.Item className="text-light" href="#action/3.1">Comedy </NavDropdown.Item>
                        <NavDropdown.Item className="text-light" href="#action/3.2"> Drama </NavDropdown.Item>
                        <NavDropdown.Item className="text-light" href="#action/3.3">Thriller </NavDropdown.Item>
                    </NavDropdown>
                        </Navbar.Brand>
                           <Nav className="flex-row justify-content-evenly">
                                <Nav.Link className="text-light" href="#deets"><GridFill></GridFill></Nav.Link>
                                <Nav.Link className="text-light" href="#memes"><Grid3x3GapFill></Grid3x3GapFill> </Nav.Link>
                            </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default MyNavbar;