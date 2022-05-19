import React from "react";
import TableRow from "./TableRow";
import { useState, useEffect } from "react";
import Search from "./../public/svg/search-icon.svg";
// import ArrowUp from "./../public/svg/icon";
// import ArrowDown from "./../public/svg/icon(1)";
import TableHeadItem from "./../components/TableHeadItem";
const Table = ({ user, todo, filterdTodo }) => {
  // console.log("todo_state", todo_state);
  const theadData = [
    { path: "user", name: "User" },
    { path: "Contact", name: "Contact", icon: <Search /> },
    {
      path: "To-Do",
      name: "To-Do",
      icon: (
        <>
          {/* <ArrowUp onClick={() => console.log("yes")} /> <ArrowDown /> */}
        </>
      ),
    },
    { path: "Completed", name: "Completed" },
    { path: "Action", name: "Action" },
  ];
  const [sort, setSort] = useState("asc");
  useEffect(() => {}, [sort]);
  // const [sortPath, setSortPath] = useState();
  // const [sortOrder, setSortOrder] = useState();
  // console.log("sort", sort);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  return (
    <div className="flex flex-col bg-purple-900">
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle">
          <div className=" bg-red-200 overflow-hidden">
            <table className="  p-4 min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 ">
                <tr className="">
                  <th scope="col" className="p-4">
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
                    sort={sort}
                  />
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {filterdTodo?.map((item) => (
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
