import React from "react";

const ProductDetails = ({price, use, info}) =>{
    return(
      <>
      <div className="price-per-month">
        <sup>$</sup>
        {price}
        {price > 0 ? <span>/mo</span> : ""}
      </div>
      <div className="use">{use}</div>
      <h3 className="info">{info}</h3>
      <div className="spacing">
        <button className="btn-style">get started</button>
      </div>
      </>
    );
};

export default ProductDetails;