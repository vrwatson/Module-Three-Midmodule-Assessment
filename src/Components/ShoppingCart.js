import React from "react";

const ShoppingCart = ({ productInfo, subtotal, tax, total }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
            {productInfo.map((product) => {
                return (
                    <li key={product.product.id}>
                        {product.product.name}: ${product.product.price.toFixed(2)}
                    </li>
                )
            })}
            </ul>
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    )
}

export default ShoppingCart;