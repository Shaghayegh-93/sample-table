import React, { useState } from "react";
import TableRow from "./TableRow";
// import { useState } from "react";
import TableHeadItem from "./../components/TableHeadItem";
import ArrowUp from "../public/svg/ArrowUp.svg";
import ArrowDown from "../public/svg/ArrowDown.svg";
const Table = ({
  user,
  data,
  sortHandler,
  sort_type,
  toggleData,
  selectedItems,
  toggleAllData,
}) => {
  const theadData = [
    { path: "user", name: "User" },
    {
      path: "Contact",
      name: "Contact",
      icon: (
        <div className="flex flex-col ">
          <ArrowUp
            className={`cursor-pointer ${
              sort_type.type === "asc" &&
              sort_type.value === "contact" &&
              "svgColor"
            }`}
            onClick={() => sortHandler("asc", "contact")}
          />
          <ArrowDown
            className={`cursor-pointer ${
              sort_type.type === "desc" &&
              sort_type.value === "contact" &&
              "svgColor"
            }`}
            onClick={() => sortHandler("desc", "contact")}
          />
        </div>
      ),
    },
    {
      path: "To-Do",
      name: "To-Do",
      icon: (
        <div className="flex flex-col ">
          <ArrowUp
            className={`cursor-pointer ${
              sort_type.type === "asc" &&
              sort_type.value === "todo" &&
              "svgColor"
            }`}
            onClick={() => sortHandler("asc", "todo")}
          />
          <ArrowDown
            className={`cursor-pointer ${
              sort_type.type === "desc" &&
              sort_type.value === "todo" &&
              "svgColor"
            }`}
            onClick={() => sortHandler("desc", "todo")}
          />
        </div>
      ),
    },

    { path: "Completed", name: "Completed" },

    { path: "Action", name: "Action" },
  ];

  return (
    <div className="flex flex-col px-2  rounded-2xl pb-6 w-full">
      <div className="overflow-x-auto sm:rounded-lg rounded-2xl border border-[#E0E7ED] 	">
        <div className="inline-block  bg-[#F9F9F9s]">
          <div className=" overflow-hidden ">
            <table className="  w-full divide-y divide-gray-200 table-fixed  ">
              <TableHeadItem data={theadData} toggleAllData={toggleAllData} />
              <tbody className="bg-white divide-y divide-gray-200 	">
                {data?.map((item) => (
                  <TableRow
                    key={item}
                    todo={item}
                    user={user}
                    toggleData={toggleData}
                    selectedItems={selectedItems}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
