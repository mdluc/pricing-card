import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";


const ProductFeatures = ({price,type, free, subscription}) =>{
    return(
  <ul className="perks">
          <li>
            <FaCheck className="check-icon" />
            {free}
          </li>
          {subscription.map((i) =>
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
    );
  };

  export default ProductFeatures;