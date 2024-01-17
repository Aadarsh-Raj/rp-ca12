import React, {useContext} from "react";
import { FoodContext } from "./FoodContext";
const FoodDetails = () => {
    const FoodItem = useContext(FoodContext);
    console.log(FoodItem);
  return (
    <>
      <div className="food-detail-container">
        <div className="food-img">
          <img src="" alt="" />
        </div>
        <div className="detail-for-food">
          {/* Name : {eleData.strMeal} <br />
          Category : {eleData.strCategory} <br /> */}
          {/* Tags : {} */}

        </div>
      </div>
    </>
  );
};

export default FoodDetails;
