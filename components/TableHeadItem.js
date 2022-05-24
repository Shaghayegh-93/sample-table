import React from "react";

const TableHeadItem = ({ data }) => (
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
      {data.map((item) => {
        return item.icon ? (
          <th
            scope="col"
            className="text-center  py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase "
            key={item.path}
          >
            <div className="flex items-center justify-center gap-x-2">
              <div> {item.icon}</div>
              {item.name}
            </div>
          </th>
        ) : (
          <th
            scope="col"
            className={`${
              item.name === "Contact" ? "hidden md:block  " : ""
            }   py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-700 uppercase `}
            key={item.path}
          >
            {item.name}
          </th>
        );
      })}
    </tr>
  </thead>
);

export default TableHeadItem;
