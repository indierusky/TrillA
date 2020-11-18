
import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import NavContainer from './navigation/nav_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';


export default () => (
    <div>
        <Route path="/" component={NavContainer} />
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={SigninContainer} />
    </div>

)