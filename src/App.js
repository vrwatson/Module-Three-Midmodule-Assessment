import React from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import productData from "./data/productData";

class App extends React.Component {
  state = { productInfo: [] };

  addToShoppingCart = (product) => {
    this.setState((prevState) => ({
      productInfo: [product, ...prevState.productInfo],
    }));
  };

  render() {
    const { productInfo } = this.state;
    console.log(productInfo);

    let subtotal = 0;
    let tax = 0;
    let total = 0;
    productInfo.forEach((product) => (subtotal += product.product.price));
    tax = subtotal * 0.050;
    total = subtotal + tax;

    console.log(subtotal)
    console.log(tax)
    console.log(total)
    return (
      <div>
        <ShoppingCart productInfo={productInfo} tax={tax || 0} subtotal={subtotal || 0} total={total || 0} />
        <ProductList productdata={productData} addToShoppingCart={this.addToShoppingCart}/>
      </div>
    );
  }
}

export default App;
