import React from 'react';


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
              <h2> Sign Up! </h2>

            <form onSubmit ={this.handleSubmit}>

            <label>Email Address:
                <input type='text' value={this.state.email} onChange={this.handleInput('email')}/>

            </label>
                <label>Username:
                <input type='text' value={this.state.username} onChange={this.handleInput('username')} />

                </label>
                <label>Password:
                <input type='password' value={this.state.password} onChange={this.handleInput('password')} />
                </label>
                <input type='submit' value="Sign Up"/>
            </form>




          </div>
    );
}

};




export default Signup;