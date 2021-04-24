import React from "react";
import ProductCard from "./ProductCard";
import productData from "../data/productData";

const ProductList = ({ addToShoppingCart }) => {
    return (
        <div>
            {productData.map((product) => {
                return (
                    <ProductCard product={product} addToShoppingCart={addToShoppingCart}/>
                )
            })}
        </div>
    )
}

export default ProductList;