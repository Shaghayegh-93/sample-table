import React from "react";
import Search from "./../public/svg/search-icon.svg";

const TableHeader = () => {
  const columns = [
    { path: "id", name: "ID", icon: <Search /> },
    { path: "name", name: "Name", icon: <Search /> },
    { path: "age", name: "Age" },
    { path: "favFruit", name: "Favourite Fruit", icon: <Search /> },
  ];
  return (
    <div>
      <div>
        {columns.map(({ path, name, icon }) => {
          return icon ? (
            <p className="flex" key={path}>
              {icon}
              {name}
            </p>
          ) : (
            <p key={path}>{name}</p>
          );
        })}
      </div>
    </div>
  );
};

export default TableHeader;
