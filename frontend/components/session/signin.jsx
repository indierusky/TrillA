import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';




class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
      
        this.handleErrors = this.handleErrors.bind(this);
    };


    


  

    handleInput(field) {


        return e => this.setState({ [field]: e.currentTarget.value })
    }


    handleSubmit(e) {

        e.preventDefault();
        this.props.login(this.state).then(() => this.props.history.push('/boards'));
    }

    handleErrors() {
       
       
         const {errors} = this.props;
  
       
        return this.props.errors.map((error, idx) => (
            <li className="error-list" key={`error-${idx}`}>
                          {error}
                    </li>
                ))
            
          
            
    }
           
    
        
          
    


    render() {
        
      
        return (

            <div className='login-form-container' >
               
               <form onSubmit={this.handleSubmit} >


                    <h2 className='login-header' > Log in to Trilla </h2>


                 
                   {/* Dont have an account? {this.props.other}
                    <div onClick={this.props.closeModal} className="close-x">X</div> */}

                    <ul>
                        {this.handleErrors()}
                    </ul>
                    <div className="login-form"> 
                        
                        <input className="login-btn" type='text' placeholder='enter email' value={this.state.email} onChange={this.handleInput('email')} />

                        
                        <input className="login-btn" type='password' placeholder='enter password' value={this.state.password} onChange={this.handleInput('password')} />
                       
                        <button className="login-btn" type='submit'> Log In </button> 
                        
                        {/* <NavLink to='/boards' className="nav-buttons-child" onClick={this.props.loginDemo}>Demo User</NavLink> */}
                 
                    <NavLink to='/signup'> Can't log in? * Sign up for an account</NavLink>
            
</div> 
                </form>
          
                <div className="bottom-img">

                    <img src="https://i.ibb.co/2dhKd3b/trillalowerleft.png" />


                </div>

                <div className="bottom-img-left">

                    <img src="https://i.ibb.co/gj52CcR/trilalowerright.png" />


                </div>


                            
             
            </div>
        );
    }

};




export default withRouter(Signin);