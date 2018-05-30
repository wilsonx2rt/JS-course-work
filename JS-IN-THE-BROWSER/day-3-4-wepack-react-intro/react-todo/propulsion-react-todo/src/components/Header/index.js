import React from 'react';
import './index.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="header-titel">
          <h1 className="header-h1">{ this.props.title }</h1>
        </div>
      </div>
    )
  }
}

export default Header;