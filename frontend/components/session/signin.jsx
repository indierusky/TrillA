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
        this.props.login(this.state)
    }

    handleErrors() {
       
       
         const {errors} = this.props;
  
       if(errors){
        return this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                          {error}
                    </li>
                ))
            
       }    
            
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
                 
                    <Link to='/signup'> Can't log in? * Sign up for an account</Link>
            
</div> 
                </form>
          

             
            </div>
        );
    }

};




export default withRouter(Signin);