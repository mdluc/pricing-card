import React, { useState } from "react";
import ProductList from "./ProductList";
import data from "./data"
import "./index.css";
import Grid from "@material-ui/core/Grid";
function App() {
  const [products, setProducts] = useState(data);
  return(
  <Grid container className="container">
    <main className="product-container">
      {
        products.map((product)=>{
          return <ProductList key={product.id}{...product}/>
        })
      }
    </main>
  </Grid>
  );
}

export default App;
