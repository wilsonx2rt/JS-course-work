import React from 'react';
import ItemGrid from '../ItemGrid'
import ShoppingCart from '../ShoppingCart';

const Body = (props) => {
    return (
      <div style={ bodyStyle }>
        <ItemGrid 
          tShirts={ props.state.tShirts } 
          addItemToCart ={ props.addItemToCart }
        />
        <ShoppingCart />
      </div>
    )
  }

  // Styles

  const bodyStyle = {
    display: 'flex',
  }

export default Body;