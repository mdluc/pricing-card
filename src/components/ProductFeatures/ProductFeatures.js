import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";


const ProductFeatures = ({price,type, free, subscription}) =>{
    return(
  <ul className="perks">
          <li>
            <FaCheck className="check-icon" />
            {free}
          </li>
          {subscription.map((index,item) =>
            price > 0 ? (
              <li key={index}>
                <FaCheck className="check-icon" />
                {item}
              </li>
            ) : (
              <li key={index}>
                <FaTimes className="cancel-icon" />
                {item}
              </li>
            )
          )}
        </ul>
    );
  };

  export default ProductFeatures;