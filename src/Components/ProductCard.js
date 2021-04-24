import React from "react";
// import productData from "../data/productData";


const ProductCard = (props) => {
    const { product, addToShoppingCart } = props;
    
    return(
        <div className="Product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed((2))} </p>
            <button onClick={() => addToShoppingCart({product})}>Add To Cart</button>
            <img src={product.img} alt="Colored square containing product name"></img>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductCard;

