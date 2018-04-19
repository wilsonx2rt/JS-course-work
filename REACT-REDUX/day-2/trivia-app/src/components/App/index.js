import React, { Component } from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import logo from './logo.svg';
import './App.css';
import Start from '../Start';

// REDUX
import { connect } from 'react-redux';

// MATERIAL-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// ACTIONS
import { fetchData } from '../../store/actions/fetchQuestionsAction';


class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    // console.log('from app render', this.props);
    return (
      <MuiThemeProvider>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Start />
      </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  questions: state.fetchQuestionsReducer.questionsArray,
});


export default connect(mapStateToProps, { fetchData })(App);
