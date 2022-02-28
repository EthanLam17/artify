import React from 'react';

class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            month: '',
            day: '',
            year: ''
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
            <div className="session-form">
                <div className="logo">
                    {/* INSERT SPOTIFY LOGO AND TITLE */}
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
{/* 
                    <label id="dob-comp"className="form-comp">What's your date of birth?
                        <div id="dob-elements">
                            <label>Month
                                <select>
                                    <option value="Month" disabled selected>Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </label>
                            <label className="form-comp">Day
                                <input type="text" value={this.state.day} onChange={this.handleInput('day')} placeholder="DD" maxLength="2"/>
                            </label>
                            <label className="form-comp">Year
                                <input type="text" value={this.state.year} onChange={this.handleInput('year')} placeholder="YYYY" maxLength="4"/>
                            </label>
                        </div>
                    </label>

                        <label className="form-comp">What's your gender?
                            <div id="gender-elements">
                                    <label>Male
                                        <input type="radio" value="male"/>
                                    </label>
                                    <label>Female
                                        <input type="radio" value="female"/>
                                    </label>
                                    <label>Non-binary
                                        <input type="radio" value="non-binary"/>
                                    </label>
                            </div>
                        </label> */}
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