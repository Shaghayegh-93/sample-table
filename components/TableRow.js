import React from "react";

const TableRow = ({ user, todo }) => {
  const filterd = todo.filter((td) => td.userId === user.id);
  console.log(filterd);

  return (
    <tr className=" px-8 py-4 hover:bg-gray-100 dark:hover:bg-gray-700">
      <>
        <td className="p-4 w-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>
        </td>

        <td className="p-4 w-4 bg-purple-500" key={user.id}>
          <div className="bg-green-300 flex flex-col">
            <p className="bg-red-400">{user.name}</p>
            <p className="bg-pink-400">{user.company.name}</p>
          </div>
        </td>
      </>

      {filterd?.map((td) => {
        return (
          <td
            className="bg-yellow-200 truncate block w-[100px] h-[50px]  "
            key={td.id}
          >
            {td.title}
          </td>
        );
      })}
      <td>complete</td>
    </tr>
  );
};

export default TableRow;
