import React from "react";

const ProductDetails = ({type, price, use, info}) =>{
  let packageName= `Thank you for choosing the ${type} package!`;
  
  const handleOnClick = () =>{
    return alert(packageName);
  }

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
        <button className="btn-style" onClick={handleOnClick}>get started</button>
      </div>
      </>
    );
};

export default ProductDetails;