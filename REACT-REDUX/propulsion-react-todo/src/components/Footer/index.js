import React from 'react';
import './index.css';
import logo from './logo.svg';
import 'font-awesome/css/font-awesome.min.css';


class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
          <div className="made-with">
            <h5>Made by Stewart Wilson with</h5>
            <img className="footer-logo" src={logo} alt="bla"/>
            <h5>&</h5>
            <span className="fa fa-coffee fa-2x"></span>
          </div>
      </div>
    )
  }
}

export default Footer;