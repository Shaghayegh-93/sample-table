import React from "react";
import TableRow from "./TableRow";
import { useState } from "react";
import TableHeadItem from "./../components/TableHeadItem";
import ArrowUp from "../public/svg/ArrowUp.svg";
import ArrowDown from "../public/svg/ArrowDown.svg";
const Table = ({ user, data, sortHandler, sort_data }) => {
  const theadData = [
    { path: "user", name: "User" },
    {
      path: "Contact",
      name: "Contact",
      icon: (
        <div className="flex flex-col ">
          <ArrowUp
            className={`cursor-pointer ${sort_data === "asc" && "svgColor"}`}
            onClick={() => sortHandler("asc", "contact")}
          />
          <ArrowDown
            className={`cursor-pointer ${sort_data === "desc" && "svgColor"}`}
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
            className={`cursor-pointer ${sort_data === "asc" && "svgColor"}`}
            onClick={() => sortHandler("asc", "todo")}
          />
          <ArrowDown
            className={`cursor-pointer ${sort_data === "desc" && "svgColor"}`}
            onClick={() => sortHandler("desc", "todo")}
          />
        </div>
      ),
    },
    {
      path: "Completed",
      name: "Completed",
      icon: (
        <div className="flex flex-col ">
          <ArrowUp
            className={`cursor-pointer ${sort_data === "asc" && "svgColor"}`}
            onClick={() => sortHandler("asc", "completed")}
          />
          <ArrowDown
            className={`cursor-pointer ${sort_data === "desc" && "svgColor"}`}
            onClick={() => sortHandler("desc", "completed")}
          />
        </div>
      ),
    },
    { path: "Action", name: "Action" },
  ];

  return (
    <div className="flex flex-col  rounded-2xl pb-6">
      <div className="overflow-x-auto sm:rounded-lg rounded-2xl border border-[#E0E7ED] 	">
        <div className="inline-block min-w-full align-middle ">
          <div className=" overflow-hidden ">
            <table className="   p-4 w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <TableHeadItem data={theadData} />
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 	">
                {data?.map((item) => (
                  <TableRow key={item} className="" todo={item} user={user} />
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
