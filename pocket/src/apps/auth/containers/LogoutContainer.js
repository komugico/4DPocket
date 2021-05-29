import React from 'react';
import { withRouter } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

class LogoutContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handle_submit(event) {
        event.preventDefault();
        this.props.logout(this.props.history);
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
                                Press button to log out.
                                </label>
                                <button type="submit">Log out</button>
                            </form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(LogoutContainer);