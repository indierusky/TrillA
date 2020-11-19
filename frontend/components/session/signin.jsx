import React from 'react';
import { Link, withRouter } from 'react-router-dom';




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
        this.props.login(this.state).then(this.props.closeModal);

    }

    handleErrors() {
        const {errors} = this.props.errors;

     
        return (
            <ul>
                {errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
   
          
    }


    render() {

        
      
        return (

            <div className='login-form-container' >
                <h2 className= 'login-header' > Log in to Trilla </h2>

                <form onSubmit={this.handleSubmit} className="login-form-box">


                    

                    <br/>
                   Dont have an account? {this.props.other}
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {/* {this.handleErrors()} */}
                <div className="login-form"> 
                        <br/>
                        <input className="login-btn" type='text' placeholder='enter email' value={this.state.email} onChange={this.handleInput('email')} />

                         <br/>
                        <input className="login-btn" type='password' placeholder='enter password' value={this.state.password} onChange={this.handleInput('password')} />
                        <br/>
                        <button className="login-btn" type='submit'  > Log In </button> 
                 
                    {/* <Link to='/signup'> Can't log in? * Sign up for an account</Link> */}
             </div> 
                </form>

          

             
            </div>
        );
    }

};




export default withRouter(Signin);