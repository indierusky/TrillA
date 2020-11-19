
import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import NavContainer from './navigation/nav_container';
import { Route, Link } from 'react-router-dom';
import Modal from './modal/modal';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';


export default () => (
    <div>
        <Modal />
        <header>

            <Link to="/" className="header" component={NavContainer}>
                <h1>Trilla</h1>
            </Link>
        {/* <Route path="/"  /> */}
        {/* <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={SigninContainer} /> */}

        </header>
    </div>

)


