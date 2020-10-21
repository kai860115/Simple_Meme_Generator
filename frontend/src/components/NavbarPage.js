import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class NavbarPage extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>
                Meme Generator
              </Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavbarPage;