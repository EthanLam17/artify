import React from 'react';
import {Link} from 'react-router-dom';

class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => (this.props.history.push('/home'))) // NEEDS ROUTE EDITING
            // .then(() => return Link to)
    }

    render () {
        return (
            <div className="user-form">
                {/* <div className="logo"> */}
                    {/* INSERT Artify LOGO AND TITLE */}
                {/* </div> */}
                <div>
                    <button className="demo-login" onClick={this.demoSubmit}>DEMO USER LOGIN</button>
                </div>
                
                <h2>Sign up for free to start listening.</h2>
                <h4>Sign up with your email address</h4>
                <form onSubmit={this.handleSubmit}>
                    <label className="form-comp">What's your email?
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Enter your email."/>
                    </label>
                    <label className="form-comp">Create a password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Create a password"/>
                    </label>
                    <label className="form-comp">What should we call you?
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')} placeholder="Enter a profile name."/>
                    </label>
                    <p className="subtext">This appears on your profile.</p>

                        <div>
                            <input id="datashare" type='checkbox' value="datashare-true" />
                            <label className="subtext" htmlFor="datashare">Share my registration data with Artify's content providers for marketing purposes.</label>
                        </div>

                    <button id="signup-btn">Sign Up</button>

                    <p>By clicking on sign-up, you agree to Artify's Terms and Conditions of Use.</p>
                    <p>To learn more about how Artify collects, uses, shares and protects your personal data, please see Artify's Privacy Policy.</p>
                </form>
                <div>
                    Have an account? 
                    <Link to="/login" id="login-redir">Log in</Link>
                    {/* LINK TO LOG IN PAGE / NEW SESSION PAGE */}

                </div>
            </div>
        )
    }
}


export default Signup