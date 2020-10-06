import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleRegisterSubmit(e, this.state)}>
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
                    <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleInputChange} />
                    <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register;