import React from 'react';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div style={ shoppingCartWrapper }>
        <Card style={ shoppingCartCard }>
          <div style={ shoppingCartContent }>
            <h3>Your Shopping Cart</h3>
          </div>
        </Card>
      </div>
    )
  }
}

// Styles

const shoppingCartWrapper = {
  width: '25vw',
  position: 'fixed',
  right: '3vw',
  top: '12vh',
}

const shoppingCartCard = {
  minHeight: '70vh',
}

const shoppingCartContent = {
  display: 'flex',
  justifyContent: 'center',
}

export default ShoppingCart;