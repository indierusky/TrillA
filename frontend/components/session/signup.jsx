import React from 'react';
import { Link,withRouter } from 'react-router-dom';


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
    this.props.createNewUser(this.state)
}

handleErrors() {
        
   
    const { errors } = this.props;

    
        return this.props.errors.map((error, idx) => (
            <li className="error-list"  key={`error-${idx}`}>
                {error}
            </li>
        ))

   
        
        
    

}


render(){
   


    return (

        <div className='login-form-container' >
            

            <form onSubmit={this.handleSubmit}  >

                <h2 className='login-header'> Sign up for your account </h2>                
                  
                    {/* Have an account? {this.props.other}
                <div onClick={this.props.closeModal} className="close-x" >X</div> */}
                <ul className="error-list">
                    {this.handleErrors()}
                </ul>
                <div className="login-form" > 
                   
                <input className="login-btn" type='text' placeholder='enter email' value={this.state.email} onChange={this.handleInput('email')}/>

           
                   
                <input className="login-btn" type='text' placeholder='enter username' value={this.state.username} onChange={this.handleInput('username')} />

               
                  
                <input className="login-btn" type='password' placeholder='enter password' value={this.state.password} onChange={this.handleInput('password')} />
                    
                <button className="login-btn" type='submit' > Sign Up </button>
                   
                <Link to='/login'> Already have an account? Log In </Link>
                </div>
            </form>




          </div>
    );
}

};




export default withRouter(Signup);