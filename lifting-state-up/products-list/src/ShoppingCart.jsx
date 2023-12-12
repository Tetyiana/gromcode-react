// <!-- ShoppingCart -->
//     <div class="column">
//       <!-- CartTitle -->
//       <div class="cart-title">John, you added 2 items</div>
//       <!-- ProductsList -->
//       <div class="products">
//         <ul class="products__list">
//           <li class="products__list-item">
//             <span class="products__item-name">iPhone 11</span>
//             <span class="products__item-price">$999</span>
//           </li>
//           <li class="products__list-item">
//             <span class="products__item-name">iPad Pro</span>
//             <span class="products__item-price">$799</span>
//           </li>
//         </ul>
//         <div class="products__total">Total: $1798</div>
//       </div>
//     </div>
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
          <CartTitle userName={this.props.userData.firstName} count={count} />   
        <ProductsList cartItems={this.state.cartItems} />
      </div>   
 ) 
  }

}
export default ShoppingCart;