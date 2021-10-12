import React from "react";
import "./style.css";

const ProductTitle = ({type}) =>{
    return(
      <div className={`custom-title ${type}`}>{type}</div>
    );
  };

export default ProductTitle;