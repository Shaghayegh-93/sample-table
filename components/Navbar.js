import React from "react";
import Image from "next/image";
import Search from "./../public/svg/search-icon.svg";
import Arrow from "./../public/svg/arrow-bottom.svg";
const Navbar = ({ search, changeHandler, searchHandler, todo_state }) => {
  return (
    <nav className=" flex items-center justify-between px-2 h-20 text-xs font-normal  ">
      {/* leftSide */}
      <div className="flex items-center justify-between font-normal  text-xs">
        <span className="w-8 h-[15px] top-[10px]  mr-2">Show</span>
        <div className=" border-[1px] flex items-center justify-between w-[72px] h-9  rounded-lg py-2 px-3 gap-x-2 borde-[#E0E7ED]">
          <span className="w-6">{todo_state.length}</span>
          <span className="  ">
            <Arrow className="w-2 h-1" />
          </span>
        </div>
        <span className="h-[15px] w-10 top-[10px] ml-2 ">entries</span>
      </div>
      {/* right side */}
      <div className="">
        <div
          className="border gap-x-2 
         border-[#E0E7ED] flex relative items-center py-[9px] px-2 rounded-md text-[#BDBDBD] w-[250px] h-9 focus-within:border-[#1ABBB9] focus:border-4"
        >
          <span className=" fill-[#BDBDBD]">
            <Search width={12} height={12} />
          </span>
          <input
            className="outline-none w-[210px] h-[15px] focus:outline-none text-xs font-normal text-[#BDBDBD]   "
            placeholder="Search name,email or etc."
            value={search}
            onChange={changeHandler}
            onKeyDown={searchHandler}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
