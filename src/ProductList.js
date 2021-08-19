import React from "react";
import data from "./data";
import { FaCheck, FaTimes } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";

const ProductList = () => {
  return (
    <Grid container className="container">
      <main className="product-container">
        {data.map((p) => {
          return (
            <Grid item md={4} id={p.title==="free"?"product":p.title==="lite"?"custom-shadow-lite":"custom-shadow-pro"}>
              {p.title==="free"?<div className="custom-title-free">{p.title}</div>:p.title==="lite"?<div className="custom-title-lite">{p.title}</div>:p.title==="lite"?<div className="custom-title-lite">{p.title}</div>:<div className="custom-title-pro">{p.title}</div>}
              {p.price > 0 ? (
                <div className="price-per-month">
                  <sup style={{ fontSize: "1.25rem" }}>$</sup>
                  <p>{p.price}</p>
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
                  <p>{p.price}</p>
                </div>
              )}
              <div className="use">{p.use}</div>
              <h3 className="info">{p.info}</h3>
              <div className="spacing">
                <button className="btn-style">get started</button>
              </div>
              <ul className="perks">
                <li>
                  <FaCheck className="check-icon" />
                  {p.free[0]}
                </li>
                {p.exclusive.map((i) =>
                  p.price > 0 ? (
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
        })}
      </main>
    </Grid>
  );
};

export default ProductList;
