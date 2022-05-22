import React from "react";

const TableHeadItem = ({ data, sort, sortHandler }) => {
  return data.map((item) => {
    return item.icon ? (
      <th
        scope="col"
        className="text-center  py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase "
        key={item.path}
      >
        <div className="flex items-center justify-around">
          {/* <select onChange={() => sortHandler()}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select> */}
          <div onChange={() => sortHandler()}> {item.icon}</div>

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
  });
};

export default TableHeadItem;
