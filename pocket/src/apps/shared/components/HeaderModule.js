import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class HeaderModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="light" variant="light">
                <LinkContainer to="/">
                    <Navbar.Brand href="/">4D Pocket</Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/dbtest">
                    <Nav.Link href="/">DBTest</Nav.Link>
                </LinkContainer>
            </Navbar>
        );
    }
}

export default HeaderModule;