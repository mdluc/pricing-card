import React from "react";

const ProductTitle = ({type}) =>{
    return(
      <div className={`custom-title ${type}`}>{type}</div>
    );
  };

export default ProductTitle;