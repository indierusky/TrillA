import React from 'react';
import {NavLink, Link } from 'react-router-dom';
import Modal from './../modal/modal';




const Nav = ({ currentUser, logout, openModal}) => {

    

    const sessionLinks = () => (
     <>
     <div className="nav-contain">
      <nav className="home-nav">
          <a href='https://trilla.herokuapp.com/#/signup'>
          
         {/* <img className="logo-new" src="https://i.ibb.co/5xZxCC1/trillanewl.png" alt="trillalogo" /> */}
                  <img className="logo-new" src="https://i.ibb.co/SsVyK4N/trillalogowhite.png" alt="trillalogo" />


        {/* <img src="https://i.ibb.co/vBsFYTy/trillalogoreal.png" alt="trillalogo"/> */}
                 </a>
        <div className="nav-buttons">
             
            <NavLink to={"/login"}><button className="nav-buttons-child-login">Log In</button></NavLink>
      &nbsp; &nbsp;
            <NavLink to={"/signup"}><button className="nav-buttons-child">Sign Up</button></NavLink>
            {/* <button onClick={() => loginDemo()}className="nav-buttons-child-demo">Demo</button> */}
        </div>
        </nav>
    </div>
     </>
    );
    const personalGreeting = () => (
    <div>
       <nav className="topnav">
            {/* <div className="topnav-logo"> */}
                <a href='https://trilla.herokuapp.com/#/signup'>
                    {/* <img src="https://i.ibb.co/vBsFYTy/trillalogoreal.png" alt="trillalogo" /> */}
                    <img src="https://gist.github.com/indierusky/d16e2526c95b58f9c159d60574ea9cf0#file-trillalogos-svg" alt="trillalogo" />

                    
                </a>
            {/* </div> */}
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
