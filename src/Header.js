import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.navToggle = this.navToggle.bind(this);
    }
    navToggle() {
        const nav = document.getElementById('slide-nav');
        nav.classList.toggle('toggle');
    }
    render() {
        return(
            <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home" >エナドリ！</Navbar.Brand>
                <span id="toggle-btn">
                    <i class="fa fa-bars" onClick={this.navToggle}></i>
                </span>
            </Navbar>
            </header>
        );
    }
}

export default Header;