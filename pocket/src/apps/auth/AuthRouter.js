import React from 'react';
import { Route } from "react-router-dom";

import { login, signup, logout } from "../../database/db";
import LoginContainer from './containers/LoginContainer';
import LogoutContainer from './containers/LogoutContainer';
import SignUpContainer from './containers/SignUpContainer';

class AuthRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact path="/auth/login">
                    <LoginContainer login={login} />
                </Route>
                <Route exact path="/auth/signup">
                    <SignUpContainer signup={signup} />
                </Route>
                <Route exact path="/auth/logout">
                    <LogoutContainer logout={logout} />
                </Route>
            </div>
        )
    }
}

export default AuthRouter;