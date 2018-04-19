import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// IMJECTION TAP EVENT PLUGIN
import injectTapEventPlugin from 'react-tap-event-plugin';
// REDUX
import { Provider } from 'react-redux';
import store from './store'

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
