import React from 'react';
import { Link } from 'react-router-dom';


class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleInput(field) {


        return e => this.setState({ [field]: e.currentTarget.value })
    }


    handleSubmit(e) {

        e.preventDefault();
        this.props.login(this.state);

    }


    render() {

        return (

            <div className='login-form' >
                <h2 className= 'login-header' > Log in to Trilla </h2>

                <form onSubmit={this.handleSubmit}>

                    
                <input className="login-btn" type='text' placeholder='enter email' value={this.state.email} onChange={this.handleInput('email')} />

                  
                <input className="login-btn" type='password' placeholder='enter password' value={this.state.password} onChange={this.handleInput('password')} />
                   
                    <button className="login-btn" type='submit'  > Log In </button> 
                    <Link to='/signup'> Can't log in? * Sign up for an account</Link>
                </form>




            </div>
        );
    }

};




export default Signin;