import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Questions from './components/Questions'
import registerServiceWorker from './registerServiceWorker';

// REDUX
import { Provider } from 'react-redux';
import store from './store';

// REACT-ROUTER
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';


ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route exact path='/' component={ App } />
        <Route exact path='/question/:order' component={ Questions } />
        {/* <Route exact path='/result' component={  } /> */}
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
