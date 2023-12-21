import React from "react";
import Product from './Product'
import { Link } from "react-router-dom";

function Products({ match }) {
  // console.log(rest);
  return (
   <div className="product">{`Product is ${match.params.productId}`}</div>
  )
}
export default Products;