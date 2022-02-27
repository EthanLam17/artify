import React from 'react';

class Signup extends React.Component {

    constructor() {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewuser(this.state)
            .then( () => this.props.history.push('/chirps')) // NEEDS EDITING
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
                </form>
            </div>
        )
    }
}


export default Signup