import React from 'react';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ItemGrid extends React.Component {

  productCardBtnClickHandler = (id) => {
    this.props.addItemToCart(id)
  }

  render() {
    const tShirts = this.props.tShirts;
    return (
      <div 
        className="grid-warper"
        style={ gridWapperStyles }
      >
        <Card>
          <div 
            className="inside-the-card"
            style={ insideTheCard }
          >
          {/* MAP ITEMS INTO COMPONENT */}
           {tShirts.map((shirt, index) => {
             return (
               <Card 
                style={ productCard }
                key={ index }
              >
                 <div 
                  style={ productCardContent }
                >
                  <h6>{ shirt.brandName }</h6>
                  <img 
                    src={ shirt.imgURL }
                    style={ productImg }
                  />
                  <h5>{ shirt.itmeName }</h5>
                  <div style={ priceContainer }>
                  <h5>{ `CHF ${shirt.price}` }</h5>
                  <RaisedButton 
                    onClick={() => { this.productCardBtnClickHandler(shirt.itemId ) }}>
                    <div className="fa fa-cart-plus fa-2x"></div>
                  </RaisedButton>
                  </div>
                </div>
               </Card>
             )
           })}
          </div>
        </Card>
      </div>
    )
  }
}

// Styles
const gridWapperStyles = {
  width: '50vw',
  margin: '12vh 3vw',
}

const insideTheCard = {
  minHeight: '40vh',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '4em',
  justifyContent: 'center',
}

const productCard = {
  padding: '.5em',
  margin: '.5em',
  width: '15em'
}

const productCardContent = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
}

const productImg = {
  width: '7em',
  alignSelf: 'center',
}

const priceContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '2.5em',
}

export default ItemGrid;