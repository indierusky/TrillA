
import React from 'react';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import NavContainer from './navigation/nav_container';
import Modal from './modal/modal';
import Home from './home';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';



export default () => (
 

    <div>
        {/* <Modal /> */}
        <header className="home">
            {/* <Link to="/" >
            </Link> */}
            <NavContainer />
            
        </header>
        <div className="home">

            <Route exact path="/" component={Home} />
        </div>

        {/* <Route path="/" component={NavContainer} /> */}
        {/* <Route exact path="/" component={Home} /> */}
      
        <Switch>
             {/* <Route path="/" component={Home} /> */}
             <Route exact path="/home" component={Home} />
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={SigninContainer} />
           
        </Switch>
       
    </div>  
         
  

)




