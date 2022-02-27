import React from 'react';

class Signup extends React.Component {

    constructor() {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
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
        this.props.createNewuser(this.state)
            .then( () => this.props.history.push('/home')) // NEEDS ROUTE EDITING
    }

    render () {
        return (
            <div className="session-form">
                <h2>Sign Up!</h2>
                <form>
                    <label>Username:
                        <input type="text" value={this.state.username} onChanged={this.handleInput('username')} />
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.email} onChanged={this.handleInput('email')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChanged={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}


export default Signup