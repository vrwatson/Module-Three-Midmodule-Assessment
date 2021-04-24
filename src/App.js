import React from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import productData from "./data/productData";

class App extends React.Component {

  render() {
    return (
      <ProductList productdata={productData} />
    )
  }

}


export default App;