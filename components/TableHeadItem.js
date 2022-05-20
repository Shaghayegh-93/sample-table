import React from "react";

const TableHeadItem = ({ data, sortHandler, sort }) => {
  console.log("sort", sort);
  return data.map((item) => {
    return item.icon ? (
      <th
        scope="col"
        className="p-4 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
        key={item.path}
      >
        <>
          <select onChange={sortHandler}>
            <option onClick={() => sortClickHandler("asc")} value="asc">
              asc
            </option>
            <option value="desc">desc</option>
          </select>
        </>
        {item.icon}
        {item.name}
      </th>
    ) : (
      <th
        scope="col"
        className="p-4 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
        key={item.path}
      >
        {item.name}
      </th>
    );
  });
};

export default TableHeadItem;
