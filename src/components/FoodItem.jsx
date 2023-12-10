import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../utils/FoodData";

const FoodItem = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start mx-6 my-10 gap-10">
      {FoodData.map((food) => {
        return <FoodCard key={food.id} {...food} />;
      })}
    </div>
  );
};

export default FoodItem;
