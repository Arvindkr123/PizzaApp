import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../utils/FoodData";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.searchItem);
  console.log(search);
  return (
    <div className="flex flex-wrap justify-center lg:justify-start mx-6 my-10 gap-10">
      {FoodData.filter((food) => {
        if (food.category === "All" || category === "All") {
          return food.name.toLowerCase().includes(search.toLowerCase());
        }
        return (
          food.category === category &&
          food.name.toLowerCase().includes(search.toLowerCase())
        );
      }).map((food) => {
        return <FoodCard key={food.id} {...food} />;
      })}
    </div>
  );
};

export default FoodItem;
