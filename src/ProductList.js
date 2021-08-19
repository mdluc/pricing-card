import React from "react";
import data from "./data";
import { FaCheck, FaTimes } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";

const ProductList = ({ title, price, use, info, free, exclusive }) => {
  return (
    <Grid
      item
      md={12}
      id={
        title === "free"
          ? "product"
          : title === "lite"
          ? "custom-shadow-lite"
          : "custom-shadow-pro"
      }
    >
      {title === "free" ? (
        <div className="custom-title-free">{title}</div>
      ) : title === "lite" ? (
        <div className="custom-title-lite">{title}</div>
      ) : title === "lite" ? (
        <div className="custom-title-lite">{title}</div>
      ) : (
        <div className="custom-title-pro">{title}</div>
      )}
      {price > 0 ? (
        <div className="price-per-month">
          <sup style={{ fontSize: "1.25rem" }}>$</sup>
          <p>{price}</p>
          <p
            style={{
              fontSize: "1.25rem",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            /mo
          </p>
        </div>
      ) : (
        <div className="price-per-month">
          <sup style={{ fontSize: "1.25rem" }}>$</sup>
          <p>{price}</p>
        </div>
      )}
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
