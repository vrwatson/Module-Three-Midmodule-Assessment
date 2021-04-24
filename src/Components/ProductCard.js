import React from "react";
// import productData from "../data/productData";


const ProductCard = (props) => {
    const product = props;
    // debugger;
    return(
        <div>
            <h3>{product.product.name}</h3>
            <p>Price: ${product.product.price.toFixed((2))} </p>
            <button>Add To Cart</button>
            <img src={product.product.img} alt="Colored square containing product name"></img>
            <p>{product.product.description}</p>
        </div>
    )
}

export default ProductCard;

