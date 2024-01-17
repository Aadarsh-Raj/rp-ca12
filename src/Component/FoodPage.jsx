import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodItem from "./FoodItem";
import './Style/foodpage.css'
const FoodPage = () => {
  const [foodArray, setFoodArray] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    foodApi(1, (x) => setFoodArray(x));
    console.log(foodArray);
  }, [page]);

  const foodApi = async (page, func) => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=f"
      );
      func(response.data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="food-container">
        {foodArray.map((ele) => (
          <FoodItem key={ele.idMeal} data={ele}/>
        ))}
      </div>
    </>
  );
};

export default FoodPage;
