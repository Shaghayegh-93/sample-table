import React from "react";
import TableRow from "./TableRow";
import { useState, useEffect } from "react";
import Search from "./../public/svg/search-icon.svg";
// import ArrowUp from "./../public/svg/icon";
// import ArrowDown from "./../public/svg/icon(1)";
import TableHeadItem from "./../components/TableHeadItem";
const Table = ({ user, todo, filterdTodo, todo_state }) => {
  // console.log("todo_state", todo_state);
  console.log("todo", todo);

  const theadData = [
    { path: "user", name: "User" },
    { path: "Contact", name: "Contact" },
    { path: "To-Do", name: "To-Do" },
    { path: "Completed", name: "Completed" },
    { path: "Action", name: "Action" },
  ];

  const [sort_data, set_sort_data] = useState("asc");

  const [data, set_data] = useState([]);
  console.log("data", data);

  let filterdSortData = [...filterdTodo];

  const compareFn = (a, b) => {
    if (a.title > b.title) return +1;
    else if (a.title < b.title) return -1;
    else return 0;
  };

  const sortHandler = (e) => {
    const type = e.target.value;
    set_sort_data(type);
    const soretedData = filterdSortData.sort((a, b) => compareFn(a, b));
    console.log("sort_daya: ", soretedData);
    set_data(soretedData);
  };

  console.log("data: ", data);
  return (
    <div className="flex flex-col  rounded-2xl	 pb-6">
      <div className="overflow-x-auto sm:rounded-lg rounded-2xl border border-[#E0E7ED]">
        <div className="inline-block min-w-full align-middle ">
          <div className="  overflow-hidden ">
            <table className="   p-4 min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 	 ">
                <tr className="		">
                  <th scope="col" className="p-4 rounded-tl-2xl	">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      ></input>
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
