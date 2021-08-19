import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";

const ProductList = ({ title, price, use, info, free, exclusive }) => {
  return (
    <Grid
      item
      md={4} 
      id={
        title === "free"
          ? "product"
          : title === "lite"
          ? "custom-shadow-lite"
          : "custom-shadow-pro"
      }
    >
      <div
        className={
          title === "free"
            ? "custom-title-free"
            : title === "lite"
            ? "custom-title-lite"
            : "custom-title-pro"
        }
      >
        {title}
      </div>

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
      <ul className="perks">
        <li>
          <FaCheck className="check-icon" />
          {free[0]}
        </li>
        {exclusive.map((i) =>
          price > 0 ? (
            <li>
              <FaCheck className="check-icon" />
              {i}
            </li>
          ) : (
            <li>
              <FaTimes className="cancel-icon" />
              {i}
            </li>
          )
        )}
      </ul>
    </Grid>
  );
};

export default ProductList;
