import React from "react";
import TableRow from "./TableRow";
import { useState } from "react";
import TableHeadItem from "./../components/TableHeadItem";
import ArrowUp from "./../public/svg/icon (2).svg";
import ArrowDown from "./../public/svg/icon (3).svg";
const Table = ({ user, todo, filterdTodo, todo_state }) => {
  const [sort_data, set_sort_data] = useState("asc");
  const [data, set_data] = useState([]);

  let filterdSortData = [...filterdTodo];

  const compareFn = (a, b) => {
    if (a.title > b.title) return +1;
    else if (a.title < b.title) return -1;
    else return 0;
  };
  console.log("sorttype:", sort_data);
  const sortHandler = (type) => {
    set_sort_data(type);
    let soretedData = [];
    if (type === "asc") {
      soretedData = filterdSortData.sort((a, b) => compareFn(a, b));
    } else {
      soretedData = filterdSortData.sort((a, b) => compareFn(a, b)).reverse();
    }
    set_data(soretedData);
    console.log("sort_data: ", soretedData);
  };

  const theadData = [
    { path: "user", name: "User" },
    { path: "Contact", name: "Contact" },
    {
      path: "To-Do",
      name: "To-Do",
      icon: (
        <div className="flex flex-col ">
          <ArrowUp
            className={`cursor-pointer ${sort_data === "asc" && "svgColor"}`}
            onClick={() => sortHandler("asc")}
          />
          <ArrowDown
            className={`cursor-pointer ${sort_data === "desc" && "svgColor"}`}
            onClick={() => sortHandler("desc")}
          />
        </div>
      ),
    },
    { path: "Completed", name: "Completed" },
    { path: "Action", name: "Action" },
  ];

  return (
    <div className="flex flex-col  rounded-2xl pb-6">
      <div className="overflow-x-auto sm:rounded-lg rounded-2xl border border-[#E0E7ED] 	">
        <div className="inline-block min-w-full align-middle ">
          <div className="  overflow-hidden ">
            <table className="   p-4 w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 ">
                <tr className="">
                  <th scope="col" className="p-4 ">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
                      <label htmlFor="checkbox" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <TableHeadItem
                    data={theadData}
                    sortHandler={sortHandler}
                    sort={sort_data}
                  />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 	">
                {todo_state?.map((item) => (
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
