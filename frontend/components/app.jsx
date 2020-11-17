
import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import NavContainer from './navigation/nav_container';
import { Route } from 'react-router-dom';
import {AuthRoute} from '../utils/route_utils';


export default () => (
    <div>
        <Route path="/" component={NavContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={SigninContainer} />
    </div>

)