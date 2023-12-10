import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";

const CartItem = () => {
  return (
    <div className="flex gap-2 shadow-lg p-2 mb-3">
      <AiOutlineDelete className="absolute right-7 cursor-pointer hover:text-red-600" />
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt="image"
        className="w-[50px] h-[50px]"
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">Onion Pizza</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹ 146</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus className="border-2  hover:bg-green-500 hover:border-none p-1 text-xl transition-all ease-linear rounded-md cursor-pointer text-red-500 border-gray-600" />
            <span>1</span>
            <AiOutlineMinus className="border-2  hover:bg-green-500 hover:border-none p-1 text-xl transition-all ease-linear rounded-md cursor-pointer text-red-500 border-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
