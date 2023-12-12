import React, { Component } from "react";
import CartTitle from "./CartTitle";
import ProductsList from "./ProductsList";

      
class ShoppingCart extends Component {
    state = {
    cartItems: [
      {
        id: '1',
        name: 'iphone 11',
        price: 999,
        },
      
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
        },
      
    ]
  }
  render() {
    const count = this.state.cartItems.length;
      return (
      <div className="column">
        <CartTitle userName={userData.firstName} count={count} />   
        <ProductsList cartItems={this.state.cartItems} />
      </div>   
 ) 
  }

}
export default ShoppingCart;