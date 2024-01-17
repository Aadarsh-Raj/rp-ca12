import React,{useContext, useState} from "react";
import "./Style/fooditem.css";
import { Link } from "react-router-dom";
import { FoodContext, FoodFunc } from "./FoodContext";
const FoodItem = (prop) => {
   const data = useContext(FoodContext);
   data.setFoodItem(prop.data);
  //  console.log(data);

  return (
    <>
      <div className="food-item">
        <div className="image-section">
          {<img src={prop.data.strMealThumb} alt="" />}
        </div>
        <div className="details-section">
            Name : {prop.data.strMeal} <br />
            Category : {prop.data.strCategory} <br />
            <Link to={`/foodDetail/:${prop.data.idMeal}`}>Click for more</Link>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
