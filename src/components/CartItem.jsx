import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlices";

const CartItem = ({ id, img, name, price, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-lg p-2 mb-3">
      <AiOutlineDelete
        onClick={() => dispatch(removeFromCart({ id, img, name, price, qty }))}
        className="absolute right-7 cursor-pointer hover:text-red-600"
      />
      <img src={img} alt="image" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name.slice(0, 11)}...</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹ {price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus className="border-2  hover:bg-green-500 hover:border-none p-1 text-xl transition-all ease-linear rounded-md cursor-pointer text-red-500 border-gray-600" />
            <span>{qty}</span>
            <AiOutlineMinus className="border-2  hover:bg-green-500 hover:border-none p-1 text-xl transition-all ease-linear rounded-md cursor-pointer text-red-500 border-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
