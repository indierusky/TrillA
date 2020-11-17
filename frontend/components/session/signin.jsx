import React from 'react';


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

                    <label>Email:
                <input type='text' placeholder='enter email' value={this.state.email} onChange={this.handleInput('email')} />

                    </label>
                    <label>Password:
                <input type='password' placeholder='enter password' value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button className="login-btn" type='submit'  > Log In </button> 
                </form>




            </div>
        );
    }

};




export default Signin;