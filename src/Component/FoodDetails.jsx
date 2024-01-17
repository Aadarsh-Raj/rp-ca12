import React, {useContext} from "react";
import { FoodContext } from "./FoodContext";
const FoodDetails = () => {
    const data = useContext(FoodContext);
    const foodDetails = data.FoodItem;
    console.log(foodDetails);
  return (
    <>
      <div className="food-detail-container">
        <div className="food-img">
          <img src="" alt="" />
        </div>
        <div className="detail-for-food">
          Name : {foodDetails.strMeal} <br />
          Category : {foodDetails.strCategory} <br />
          Tags : {foodDetails.strTags}

        </div>
      </div>
    </>
  );
};

export default FoodDetails;
