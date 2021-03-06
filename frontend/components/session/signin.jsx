import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';




class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
      
        this.handleErrors = this.handleErrors.bind(this);
    };


    
componentWillUnmount(){

this.props.clearSessionErrors();

}

  

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
            <>

             <center><img className="logo-form" src="https://i.ibb.co/GPchpq4/trillalogogy.png" alt="trillalogogray"/></center>

                    
            <div className='login-form-container' >


               
               <form className="login-form-box" onSubmit={this.handleSubmit} >




                 
                   {/* Dont have an account? {this.props.other}
                    <div onClick={this.props.closeModal} className="close-x">X</div> */}

                    
                    <div className="login-form"> 

                        <ul className="error-list">
                        {this.handleErrors()}
                        </ul>

                                     <h2 className='login-header' > Log in to Trilla </h2>

                        <input className="login-btn" type='text' placeholder='Enter email' value={this.state.email} onChange={this.handleInput('email')} />

                        
                        <input className="login-btn" type='password' placeholder='Enter password' value={this.state.password} onChange={this.handleInput('password')} />
                       
                        <button className="login-btn" type='submit'> Log In </button> 
                        
                        {/* <NavLink to='/boards' className="nav-buttons-child" onClick={this.props.loginDemo}>Demo User</NavLink> */}
                 
                    <NavLink to='/signup' className="lnk-signup" activeClassName="lnk-signup-active" > * Sign up for an account * </NavLink>
            
            </div> 
                </form>
          
           </div>
                <div className="bottom-img-left" >

                    {/* <img src="https://i.ibb.co/2dhKd3b/trillalowerleft.png" /> */}

                    <img className="bottom-img-left" src="https://i.ibb.co/0mNfPS9/trelloteamboard.png" />



                </div>

                <div className="bottom-img" >
                    
                    <img className="bottom-img" src="https://i.ibb.co/YpykNgk/newtrellobest.png" />
                    {/* <img src="https://i.ibb.co/gj52CcR/trilalowerright.png" /> */}


                </div>


                            
             
           
            </>
        );
    }

};




export default withRouter(Signin);