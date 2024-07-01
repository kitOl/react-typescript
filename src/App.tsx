import React from "react";
import { Product } from "./components/Product";
import { products } from "./data/products";

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}
    </div>
  );
  // return React.createElement("h1", {}, "Hello From JS");
}

export default App;
