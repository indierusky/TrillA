import React from 'react';
import {NavLink, Link } from 'react-router-dom';

// export default ({ currentUser, logout }) => {
//     const display = currentUser ? (

//         <div>
//             <p>
//                 Hello, {currentUser.username}
//             </p>
//             <button className="btn-login" onClick={logout}> Log Out </button>
//         </div>

//     ) : (
//             <div className="btns">

                
//                 <Link className="btn-signup" to="/signup">Sign Up</Link>
                
                
               
//                 <Link className="btn-login" to="/login">Log In</Link>
                
//             </div>
//         );

//     return (
//         <header className="navigation">
//             <h1 className="logo">Trilla</h1>
//             <div>
//                 {display}
//             </div>
//         </header>
//     );
// };




const Nav = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="nav-buttons">
            <NavLink to={"/login"}><button className="nav-buttons-child-login">Login</button></NavLink>
      &nbsp; &nbsp;
            <NavLink to={"/signup"}><button className="nav-buttons-child">Signup</button></NavLink>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Nav;
