import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// IMJECTION TAP EVENT PLUGIN
import injectTapEventPlugin from 'react-tap-event-plugin';
// REDUX
import { Provider } from 'react-redux';
import store from './store'
//REACT-ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// ROUTES
import Home from './Routes/Home';
import Feed from './Routes/Feed';


injectTapEventPlugin();


ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <MuiThemeProvider>
          <Route exact path='/' component={ Home } />
          <Route exact path='/feed' component={ Feed } />
        </MuiThemeProvider>
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
