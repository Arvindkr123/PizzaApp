import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../utils/FoodData";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const category = useSelector((state) => state.category.category);
  return (
    <div className="flex flex-wrap justify-center lg:justify-start mx-6 my-10 gap-10">
      {FoodData.filter((item) => {
        if (item.category === "All" || category === "All") {
          return item;
        }
        return item.category === category;
      }).map((food) => {
        return <FoodCard key={food.id} {...food} />;
      })}
    </div>
  );
};

export default FoodItem;
