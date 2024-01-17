import React, { createContext, useState } from "react";

const FoodContext = createContext();

const FoodFunc = (props) => {
  const initialData = {
    foodItem: [],
    count:0
  };
  const [FoodItem, setFoodItem] = useState(initialData);
  
  const contextValue = {
    FoodItem,
    setFoodItem,
  };
  return (
    <FoodContext.Provider value={contextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodFunc };
