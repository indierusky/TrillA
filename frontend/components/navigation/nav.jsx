import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (

        <div>
            <p>
                Hello, {currentUser.username}
            </p>
            <button onClick={logout}> Log Out </button>
        </div>

    ) : (
            <div className="header-btns">

                <div className="signup-btn" >
                <Link className="btn" to="/signup">Sign Up</Link>
                </div>
                
                <div className="login-btn">
                <Link className="btn" to="/login">Log In</Link>
                </div>
            </div>
        );

    return (
        <header className="navigation">
            <h1 className="logo">Trilla</h1>
            <div>
                {display}
            </div>
        </header>
    );
};
