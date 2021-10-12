import React from "react";
import Product from "./Product";
import data from "./assets/db/data"
import "./index.css";

import Grid from "@material-ui/core/Grid";

function App() {
  return(
    <Grid container className="container">
    <main className="product-container">
      {
        data.map((props)=>{
          return <Product key={props.id}{...props}/>
        })
      }
      </main>
  </Grid>
  );
}

export default App;
