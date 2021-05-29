import React  from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

import { getUser } from '../../../../database/db';

class HeaderModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        getUser((user) => this.setState({user: user}));
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
                {this.state.user &&
                    <div>
                        <p>{this.state.user.email}</p>
                        <p>{this.state.user.uid}</p>
                        <LinkContainer to="/auth/logout">
                            <Nav.Link href="/">Log out</Nav.Link>
                        </LinkContainer>
                    </div>
                }
                {!this.state.user &&
                    <div>
                        <LinkContainer to="/auth/login">
                            <Nav.Link href="/">Log in</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/auth/signup">
                            <Nav.Link href="/">Sign up</Nav.Link>
                        </LinkContainer>
                    </div>
                }
            </Navbar>
        );
    }
}

export default HeaderModule;