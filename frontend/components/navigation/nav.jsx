import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (

        <div>
            <p>
                Hello, {currentUser.username}
            </p>
            <button className="btn-login" onClick={logout}> Log Out </button>
        </div>

    ) : (
            <div className="btns">

                
                <Link className="btn-signup" to="/signup">Sign Up</Link>
                
                
               
                <Link className="btn-login" to="/login">Log In</Link>
                
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
