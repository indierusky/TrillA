import React from 'react';
import {Link, NavLink,withRouter } from 'react-router-dom';
const faker = require('faker');


class Signup extends React.Component {
constructor(props){
    super(props);

    this.state = { username: '', email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSignUp = this.demoSignUp.bind(this);
    this.handleErrors = this.handleErrors.bind(this);

};

handleInput(field){


    return e => this.setState({ [field]: e.currentTarget.value})
}


componentWillUnmount(){

this.props.clearSessionErrors();

}

demoSignUp(e) {
    e.preventDefault();
    let password = faker.internet.password();
    let user = {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: password,
    }


    this.props.createNewUser(user).then(() => this.props.history.push('/boards'));
  }

handleSubmit(e){

    e.preventDefault();
    this.props.createNewUser(this.state).then(() => this.props.history.push('/boards'));
}

handleErrors() {
        
   
    const { errors } = this.props;
    debugger
    
        return this.props.errors.map((error, idx) => (
            <li className="error-list"  key={`error-${idx}`}>
                {error}
            </li>
        ))

   
        
        
    

}


render(){
   


    return (
        <>
        <center><img className="logo-form" src="https://i.ibb.co/GPchpq4/trillalogogy.png" alt="trillalogogray"/></center>

        <div className='login-form-container' >
            

            <form className="login-form-box" onSubmit={this.handleSubmit}  >

                  
                    {/* Have an account? {this.props.other}
                <div onClick={this.props.closeModal} className="close-x" >X</div> */}
                
                <div className="login-form" > 
                    <ul className="error-list">
                        {this.handleErrors()}
                   </ul>

                        <h2 className='login-header-signup'> Sign up for your account </h2>                

                    
                   
                <input className="login-btn" type='text' placeholder='Enter email' value={this.state.email} onChange={this.handleInput('email')}/>

           
                   
                <input className="login-btn" type='text' placeholder='Enter username' value={this.state.username} onChange={this.handleInput('username')} />

               
                  
                <input className="login-btn" type='password' placeholder='Enter password' value={this.state.password} onChange={this.handleInput('password')} />
                    
                <button className="login-btn" type='submit' > Sign Up </button>
                   
                <button onClick={this.demoSignUp} className="demo-btn" type='submit' >Demo User</button>

                <NavLink to='/login'> Already have an account? Log In </NavLink>


                </div>
            </form>

          
                <div className="bottom-img">

                    <img src="https://i.ibb.co/2dhKd3b/trillalowerleft.png" />


                </div>

                <div >

                    <img className="bottom-img-left" src="https://i.ibb.co/YpykNgk/newtrellobest.png" />

                    {/* <img src="https://i.ibb.co/gj52CcR/trilalowerright.png" /> */}


                </div>


                   



          </div>
          </>
    );
}

};




export default withRouter(Signup);