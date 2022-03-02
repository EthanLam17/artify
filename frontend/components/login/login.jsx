import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => (this.props.history.push('/home')))
    }

    demoSubmit(e) {
        e.preventDefault(e);
        this.props.login({
            email: 'demo',
            password: 'password'
        })
        .then(() => (this.props.history.push('/home')))
    }


    render() {
        return (
            <div className="login-cont">
                <div className='header'>
                    <i className="fa-brands fa-spotify"></i>
                    <h1 className='logo'>Artify</h1>
                </div>

                <div className='form-comp'>To continue, log in to Artify</div>
                    <div>
                        <button className="demo-login" onClick={this.demoSubmit}>DEMO USER LOGIN</button>
                    </div>


                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <label className="form-comp">What's your email?
                            <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email address"/>
                        </label>

                        <label className="form-comp">Create a password
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Password"/>
                        </label>

                        <button id="login-btn">LOG IN</button>
                    </form>

                    <div className="redirect">
                        <div>Don't have an account?</div>
                        <Link id="signup-redirect"to="/signup">SIGN UP FOR ARTIFY</Link>
                    </div>

            </div>
        )     
    }


}

export default Login