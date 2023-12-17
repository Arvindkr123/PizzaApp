import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3">
      <div className="">
        <h3 className="text-xl font-bold text-gray-500">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">SWEET PIZZA</h1>
      </div>
      <div>
        <input
          className="p-3 border border-gray-300 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
          type="search"
          name="search"
          id="search"
          onChange={searchHandler}
          placeholder="Search Here"
          autoComplete="off"
        />
      </div>
    </nav>
  );
};

export default Navbar;
