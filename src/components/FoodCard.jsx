import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlices";
const FoodCard = ({ id, img, name, price, desc, category, rating }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white flex flex-col p-5 rounded-lg mx-5 gap-2">
      <img
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        src={img}
        alt={name}
      />
      <div className="text-sm flex justify-between">
        <h2>Onion Pizza</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between items-center">
        <span className="flex items-center text-sm font-mono justify-center gap-1">
          <AiFillStar className="text-yellow-400" />
          {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, img, name, price, qty: 1 }));
          }}
          className="rounded-lg text-sm p-1 text-white bg-green-500 hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
