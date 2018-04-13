import React, { Component } from 'react';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from '../TopBar';
import Body from '../Body';
import items from '../../shopItems/Items';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tShirts: items,
      shoppingCart: [],
    }
  }

  addItemToCart = (id) => 
  {
    const shirts = this.state.tShirts;
    let shirt = shirts.filter((shirt) => shirt.itemId === id)[0];
    let cart = this.state.shoppingCart;
    if (cart.length < 1) {
      shirt.order += 1;
      cart.push(shirt);
    } else {
      for (const item of cart) {
        if (item.id === shirt.id) {
          item.order += 1;
        } 
      }
    }
    this.setState({
      shoppingCart: cart,
    });
    console.log(this.state.shoppingCart);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <TopBar />
          <Body 
            state={ this.state }
            addItemToCart ={ this.addItemToCart }
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;