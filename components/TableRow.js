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
    <tr className="  px-8 py-4  shadow-[0_0_-1px_0_ rgba(224, 231, 237, 1)]  ">
      <>
        <td className="px-3 py-4 gap-2 w-4 text-center">
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
          className="  p-4 gap-2 w-[160px] h-[68px] text-left font-normal"
          key={user.id}
        >
          <div className=" flex flex-col whitespace-nowrap items-center px-3 py-4 text-xs ">
            <p className="  text-[#828282] font-normal  leading-[150%]">
              {user_name.name}
            </p>
            <p className=" font-normal  text-[#3333]">
              {user_name.company.name}
            </p>
          </div>
        </td>
      </>
      <td
        className=" p-4 gap-2   hidden sm:block  text-left  w-[160px] h-[68px]  "
        key={user.id}
      >
        <div className="px-3 py-4 flex flex-col items-center whitespace-nowrap   font-normal  text-[#828282] text-xs">
          <p className="leading-[18px] ">{user_name.email}</p>
          <p className="">{user_name.phone}</p>
        </div>
      </td>

      <td
        className=" p-4  text-left text-[#828282] w-[160px] h-[68px] font-normal text-xs"
        key={todo.id}
      >
        {todo.title}
      </td>

      <td className="p-4  text-center text-[#18AB56] w-[82px] h-[68px] ">
        <span className="bg-[#F0FFF8] py-2 px-3 rounded-lg">complete</span>
      </td>
      <td>
        <div className="flex items-center justify-center gap-6 ">
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
