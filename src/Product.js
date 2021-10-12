import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductTitle from "./components/ProductTitle/ProductTitle"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import ProductFeatures from "./components/ProductFeatures/ProductFeatures"

const Product = (props) => {
  const { type, price, use, info, free, subscription} = props;
  return (
<Grid
      item
      md={4}  style={{backgroundColor:"white",margin:"15px",paddingTop:"5px",borderRadius:"5px"}}
      className={`shadow-${type}`}      
    >
        <ProductTitle type={type}/>
        <ProductDetails price={price} use={use} info={info}/>
        <ProductFeatures price={price} free={free} subscription={subscription} />
    </Grid>
  );
};

export default Product;
