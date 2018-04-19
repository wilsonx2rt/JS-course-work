import React, { Component } from 'react';
// REDUX
import { connect } from 'react-redux';
import { fetchTokensAction } from '../../store/actions/fetchUserAction';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchTokensAction(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email">Username:</label>
          <input 
            value={ this.state.email }
            type="text"
            name="username"
            id="email-input"
            onChange={ this.handleChange }
          />
          
          <label htmlFor="password">Password:</label>
          <input 
            vlaue={ this.state.password }
            type="password"
            name="password"
            id="password-input"
            onChange={ this.handleChange }
          />
          
          <input
            type="submit"
            value="Login"
          />
        
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps, { fetchTokensAction })(Login);