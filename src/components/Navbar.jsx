import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3">
      <div className="">
        <h3 className="text-xl font-bold text-gray-500">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">AK-PizzaS</h1>
      </div>
      <div>
        <input
          className="p-3 border border-gray-300 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
          type="search"
          name="search"
          id="search"
          placeholder="Search Here"
          autoComplete="off"
        />
      </div>
    </nav>
  );
};

export default Navbar;