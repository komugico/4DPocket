import React from 'react';
import { withRouter } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

class SingUpContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handle_submit(event) {
        event.preventDefault();
        const { email, password } = event.target.elements;
        this.props.signup(email.value, password.value, this.props.history);
    }
    
    render() {
        return (
            <div>
                <HeaderModule />
                <br />
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                            <form onSubmit={(event) => this.handle_submit(event)}>
                                <label>
                                Email
                                <input name="email" type="email" placeholder="Email" />
                                </label>
                                <label>
                                Password
                                <input name="password" type="password" placeholder="Password" />
                                </label>
                                <button type="submit">Sign up</button>
                            </form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(SingUpContainer);