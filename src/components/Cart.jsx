import React from "react";
import { IoMdClose } from "react-icons/io";
const Cart = () => {
  return (
    <>
      <div className="p-5 fixed right-0 top-0 lg:w-[20vw] w-full bg-white h-full">
        <div className="flex justify-between items-center my-3">
          <span className="font-bold text-xl text-gray-800">My Order</span>
          <span>
            <IoMdClose className="cursor-pointer border-2 p-1 text-xl rounded-md hover:text-red-300 border-gray-600 text-gray-600 font-bold hover:border-red-300" />
          </span>
        </div>
        {/* For the total amount */}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : </h3>
          <h3 className="font-semibold text-gray-800">Total Amount : </h3>
          <hr className=" w-[90vw] lg:w-[18vw] my-2" />
          <button className="rounded-lg w-[90vw] lg:w-[18vw] bg-green-500 font-bold px-3 text-white py-2 mb-5">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
