import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.navToggle = this.navToggle.bind(this);
    }
    
    // ナビのボタン
    navToggle() {
        const nav = document.getElementById('slide-nav');
        nav.classList.toggle('toggle');
    }

    render() {
        return(
            <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/energy_drink/" >Energy Drink</Navbar.Brand>
                <span id="toggle-btn">
                    <i className="fa fa-bars" onClick={this.navToggle}></i>
                </span>
            </Navbar>
            </header>
        );
    }
}

export default Header;
