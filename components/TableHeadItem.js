import React from "react";

const TableHeadItem = ({ data, toggleAllData }) => (
  <thead className=" bg-gray-100 w-[538px] h-14 ">
    <tr className="">
      <th scope="col" className="p-4 w-14 h-14 gap-[10px] ">
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
            onChange={(e) => toggleAllData(e.target.checked)}
          />
          <label htmlFor="checkbox" className="sr-only">
            checkbox
          </label>
        </div>
      </th>
      {data.map((item) => {
        return item.icon ? (
          <th
            scope="col"
            className={`${
              item.name === "Contact"
                ? "hidden md:table-cell  md:w-[282px] md:m-w-[314px]  "
                : ""
            } ${
              item.name === "User"
                ? "w-[140px] h-14 md:w-[282px] md:m-w-[314px] md:table-cell "
                : ""
            } ${
              item.name === "To-Do"
                ? "w-[140px] h-14 md:w-[282px] md:m-w-[314px]"
                : ""
            }
            ${item.name === "Completed" ? "w-[90px] h-14" : ""}
            ${
              item.name === "Action" ? "w-[81px] h-14 md:w-[136px] " : ""
            }whitespace-nowrap   text-xs font-semibold tracking-wider text-left text-gray-700 py-4 px-3 gap-[10px]   `}
            key={item.path}
          >
            <div className="flex items-center justify-between  w-full ">
              {item.name}
              <div> {item.icon}</div>
            </div>
          </th>
        ) : (
          <th
            scope="col"
            className={`${
              item.name === "Contact"
                ? "hidden md:table-cell  md:w-[282px] md:m-w-[314px] h-14"
                : ""
            }${
              item.name === "User"
                ? "w-[140px] h-14 md:w-[282px] md:m-w-[314px] md:table-cell  "
                : ""
            }  ${
              item.name === "Completed" ? "w-[90px] h-14 md:w-[113px]" : ""
            }${item.name === "Action" ? "w-[81px] h-14 md:w-[84px] " : ""}
             whitespace-nowrap   py-4 px-3  text-xs font-semibold tracking-wider text-left text-gray-700 uppercase     `}
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
