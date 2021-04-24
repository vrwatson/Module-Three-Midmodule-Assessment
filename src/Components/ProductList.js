import React from "react";
import ProductCard from "./ProductCard";
import productData from "../data/productData";

import "./ProductList.css"

const ProductList = ({ addToShoppingCart }) => {
    return (
        <div>
            <h2>My Garage Sale</h2>
            <div className="Products">
            {productData.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} addToShoppingCart={addToShoppingCart}/>
                )
            })}
            </div>
        </div>
    )
}

export default ProductList;