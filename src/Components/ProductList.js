import React from "react";
import ProductCard from "./ProductCard";
import productData from "../data/productData";

import "./ProductList.css";

const ProductList = ({ addToShoppingCart }) => {
  return (
    <div className="garageSale">
      <h2>Welcome to Vanessa's Garage Sale</h2>
      <ul className="Products">
        {productData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToShoppingCart={addToShoppingCart}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
