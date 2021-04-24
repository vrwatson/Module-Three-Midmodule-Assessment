import React from "react";
import ProductCard from "./ProductCard";
import productData from "../data/productData";

const ProductList = () => {
    return (
        <div>
            {productData.map((product) => {
                return (
                    <ProductCard product={product} />
                )
            })}
        </div>
    )
}

export default ProductList;