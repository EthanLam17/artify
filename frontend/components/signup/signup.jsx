import React from 'react';

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
                <div className="logo">
                    {/* INSERT SPOTIFY LOGO AND TITLE */}
                </div>
                
                <h2>Sign up for free to start listening.</h2>
                <h4>Sign up with your email address</h4>
                <form onSubmit={this.handleSubmit}>
                    {/* <ul>
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul> */}
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
                            <label className="subtext" htmlFor="datashare">Share my registration data with Spotify's content providers for marketing purposes.</label>
                        </div>

                    <button>Sign Up</button>

                    <p>By clicking on sign-up, you agree to Spotify's Terms and Conditions of Use.</p>
                    <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see Spotify's Privacy Policy.</p>
                </form>
                <div>
                    Have an account?
                    {/* LINK TO LOG IN PAGE / NEW SESSION PAGE */}
                </div>
            </div>
        )
    }
}


export default Signup