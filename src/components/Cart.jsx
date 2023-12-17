import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [cartActive, setCartActive] = useState(false);
  const data = useSelector((state) => state.cart.cart);
  const totalQuantity = data.reduce((acc, cur) => acc + cur.qty, 0);
  const totalPrice = data.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`p-5 fixed right-0 top-0 lg:w-[20vw] w-full bg-white h-full ${
          cartActive ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="font-bold text-xl text-gray-800">My Order</span>
          <span>
            <IoMdClose
              onClick={() => setCartActive(!cartActive)}
              className="cursor-pointer border-2 p-1 text-xl rounded-md hover:text-red-300 border-gray-600 text-gray-600 font-bold hover:border-red-300"
            />
          </span>
        </div>
        {/* Item card added start */}
        {data.length > 0 ? (
          data.map((ele) => {
            return <CartItem key={ele.id} {...ele} />;
          })
        ) : (
          <div className="flex justify-center flex-col gap-7">
            <h2 className="text-center text-2xl">Your Cart is Empty</h2>
            <button
              onClick={() => setCartActive(false)}
              className="bg-red-400 text-white p-3 hover:bg-red-500"
            >
              back to shoping
            </button>
          </div>
        )}
        {/* Item card added  end */}

        {/* For the total amount */}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">
            Items : {totalQuantity}{" "}
          </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className=" w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate("/success")}
            className="rounded-lg w-[90vw] lg:w-[18vw] bg-green-500 font-bold px-3 text-white py-2 mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setCartActive(!cartActive)}
        className={`rounded-full bg-white text-5xl shadow-md p-3 fixed bottom-4 right-4 cursor-pointer ${
          totalQuantity > 0 && "animate-bounce transition-all ease-in-out"
        }`}
      />
    </>
  );
};

export default Cart;
