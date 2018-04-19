import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// COMPONENTS
import Login from '../Login';
import Feed from '../Feed';

// REDUX
import { connect } from 'react-redux';
 
class App extends Component {
  render() {
    // console.log(this.props, 'from connected app');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Login />
        <Feed />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(App);
