import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    render() {
        return(
            <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home" >Energy Drink</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#monster">モンスター</Nav.Link>
                    <Nav.Link href="#red-bull">レッドブル</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </header>
        );
    }
}

export default Header;