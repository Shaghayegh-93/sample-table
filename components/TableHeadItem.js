import React from "react";

const TableHeadItem = ({ data, sortHandler, sort }) => {
  return data.map((item) => {
    return item.icon ? (
      <th
        scope="col"
        className="text-left  py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase "
        key={item.path}
      >
        <>
          <select onChange={() => sortHandler()}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </>
        {item.icon}
        {item.name}
      </th>
    ) : (
      <th
        scope="col"
        className={`${
          item.name === "Contact" ? "hidden md:block  " : ""
        }   py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase `}
        key={item.path}
      >
        {item.name}
      </th>
    );
  });
};

export default TableHeadItem;
