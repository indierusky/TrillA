import React from 'react';
import { Link } from 'react-router-dom';


class Signup extends React.Component {
constructor(props){
    super(props);

    this.state = { username: '', email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);

};

handleInput(field){


    return e => this.setState({ [field]: e.currentTarget.value})
}


handleSubmit(e){

    e.preventDefault();
    this.props.createNewUser(this.state);

}


render(){

    return (

          <div className= 'session-form' >
              <h2 className="login-header"> Sign up for your account </h2>

            <form onSubmit ={this.handleSubmit}>

            
                <input className="login-btn" type='text' placeholder='enter email' value={this.state.email} onChange={this.handleInput('email')}/>

           
                
                <input className="login-btn" type='text' placeholder='enter username' value={this.state.username} onChange={this.handleInput('username')} />

               
                
                <input className="login-btn" type='password' placeholder='enter password' value={this.state.password} onChange={this.handleInput('password')} />
               
                <button className="login-btn" type='submit' > Sign Up </button>
                <Link to='/login'> Already have an account? Log In </Link>

            </form>




          </div>
    );
}

};




export default Signup;