import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <section>
      <ul className="flex items-center justify-center gap-12 mb-16">
        <li>
          <NavLink
            to={"/cuisine/Italian"}
            className="text-white flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-[#494949] to-[#313131] h-24 w-24  scale-75"
          >
            <FaPizzaSlice />
            <h4 className=" text-sm">Italian</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/cuisine/American"}
            className="text-white flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-[#494949] to-[#313131] h-24 w-24 scale-75"
          >
            <FaHamburger />
            <h4 className=" text-sm">American</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/cuisine/Thai"}
            className="text-white flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-[#494949] to-[#313131] h-24 w-24 scale-75"
          >
            <GiNoodles />
            <h4 className="text-white text-sm">Thai</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/cuisine/Japanese"}
            className="text-white flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-[#494949] to-[#313131] h-24 w-24 scale-75"
          >
            <GiChopsticks />
            <h4 className="text-white text-sm">Japanese</h4>
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Category;
