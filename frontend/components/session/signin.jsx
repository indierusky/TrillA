import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';




class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { hasError: false };
        this.handleErrors = this.handleErrors.bind(this);
    };


    


  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
}

componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
}

    handleInput(field) {


        return e => this.setState({ [field]: e.currentTarget.value })
    }


    handleSubmit(e) {

        e.preventDefault();
        this.props.login(this.state).then(this.props.closeModal);

    }

    handleErrors() {
        const {errors} = this.props.errors;

        if(!errors || errors.length === 0){

            return;
        }else{
        
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
          
    }


    render() {

        
      
        return (

            <div className='login-form-container' >
                <h2 className= 'login-header' > Log in to Trilla </h2>

                <form onSubmit={this.handleSubmit} className="login-form-box">


                    

                    <br/>
                   Dont have an account? {this.props.other}
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                     {this.handleErrors()}
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