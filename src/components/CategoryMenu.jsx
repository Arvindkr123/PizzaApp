import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import FoodData from "../utils/FoodData";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  // console.log(selectedCategory);

  const listUniqueCategory = () => {
    const uniqueCategory = [
      "All",
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setCategories(uniqueCategory);
  };

  useEffect(() => {
    listUniqueCategory();
  }, []);

  return (
    <div className="mx-6">
      <h3 className="capitalize text-xl font-semibold">find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => dispatch(setCategory(cat))}
            className={`px-3 py-2 ${
              selectedCategory === cat ? "bg-green-500" : "bg-gray-200"
            } font-bold rounded-lg hover:bg-green-500`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
