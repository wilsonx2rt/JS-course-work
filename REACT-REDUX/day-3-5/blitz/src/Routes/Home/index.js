import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Header from '../../components/Header';
import Login from '../../components/Login';

// REDUX
import { connect } from 'react-redux';
 
class Home extends Component {
  render() {
    // console.log(this.props, 'from connected app');
    return (
      <div className="App">
        <Header />
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(Home);
