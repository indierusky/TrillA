import React from 'react';
import {NavLink, Link } from 'react-router-dom';
import Modal from './../modal/modal';


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
    <div>
       <nav className="topnav">
            <div className="topnav-logo">
                <a href='https://trilla.herokuapp.com/#/signup'>
                    <img src="https://i.ibb.co/vBsFYTy/trillalogoreal.png" alt="trillalogo" />
                </a>
            </div>
                <center><h2 className="topnav">     Hi, {currentUser.username}!</h2></center>
            <button className="nav-button-logout" onClick={logout}>Log Out</button>
             
        </nav>
           
    </div>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Nav;
