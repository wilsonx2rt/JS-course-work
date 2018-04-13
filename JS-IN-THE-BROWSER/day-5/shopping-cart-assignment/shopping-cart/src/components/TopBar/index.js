import React from 'react';
import './index.css';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const TopBar = (props) => {
  return (
    <AppBar
      title="My Fancy Shoping Cart"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={ AppBarStyle }
    >
      <RaisedButton
        backgroundColor='white'
        style={btnStyle}
       />
      <TextField
        inputStyle={{
          color: 'white',
        }}
        placeholder="Shop Search"
       />
    </AppBar>
  )
}

// Styles

const btnStyle = {
  height: '2em',
  marginRight: '1em',
  alignSelf: 'center',
};

const AppBarStyle = {
  backgroundColor: 'black', 
        color: 'white',
        diplay: 'flex',
        position: 'fixed',
}

export default TopBar;