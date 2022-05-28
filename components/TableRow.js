import React, { useState, useEffect } from "react";
import Vector from "../public/svg/Vector.svg";
import Union from "../public/svg/Union.svg";

const TableRow = ({ user, todo, toggleData, selectedItems }) => {
  const user_name = user.filter((item) => item.id === todo.userId)[0];
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const index = selectedItems.findIndex((item) => item === todo.id);
    if (index !== -1) setChecked(true);
    else setChecked(false);
  }, [selectedItems, todo]);

  return (
    <tr className="  w-[538px] h-[68px] shadow-[0_0_-1px_0_ rgba(224, 231, 237, 1)] gap-[10px] 	">
      <td className="p-4 gap-2  text-left table-cell w-14 h-[68px]">
        <div className="flex items-center justify-center">
          <input
            onChange={() => toggleData(todo.id)}
            value={todo.id}
            id="checkbox"
            checked={checked}
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "
          ></input>
          <label htmlFor="checkbox" className="sr-only">
            checkbox
          </label>
        </div>
      </td>

      <td
        className="  p-4 gap-2  text-left font-normal w-40 h-[68px]"
        key={user.id}
      >
        <div className=" flex flex-col whitespace-nowrap items-center  justify-start px-3 py-4 text-xs  ">
          <p className="  text-[#828282] font-normal  leading-[150%]">
            {user_name.name}
          </p>
          <p className=" font-normal  text-[#3333]">{user_name.company.name}</p>
        </div>
      </td>

      <td
        className=" p-4 gap-2   hidden sm:block  text-left     "
        key={user.id}
      >
        <div className="px-3 py-4 flex flex-col  whitespace-nowrap   font-normal  text-[#828282] text-xs truncate">
          <p className="leading-[18px] ">{user_name.email}</p>
          <p className="">{user_name.phone}</p>
        </div>
      </td>

      <td
        className=" p-4  text-left text-[#828282] font-normal text-xs truncate w-40 h-[68px]"
        key={todo.id}
      >
        {todo.title}
      </td>

      <td className="p-4  text-left text-[#18AB56]   w-[82px] h-[68px]">
        <span className="bg-[#F0FFF8] py-2 px-3 rounded-lg">complete</span>
      </td>
      <td className="w-20 h-[68px]">
        <div className="flex items-center justify-center gap-6  ">
          <span className="hidden sm:block">
            <Union></Union>
          </span>
          <span>
            <Vector></Vector>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
