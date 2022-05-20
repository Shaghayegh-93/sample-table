import React from "react";

const TableRow = ({ user, todo }) => {
  const user_name = user.filter((item) => item.id === todo.userId)[0];
  // console.log("user", user);

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
            <p className="bg-red-400">{user_name.name}</p>
            <p className="bg-pink-400">{user_name.company.name}</p>
          </div>
        </td>
      </>
      <td className="p-4  hidden sm:block bg-purple-100" key={user.id}>
        <div className="bg-green-300 flex flex-col">
          <p className="bg-red-400">{user_name.email}</p>
          <p className="bg-pink-400">{user_name.phone}</p>
        </div>
      </td>

      <td className="bg-yellow-200 p-4 w-4 " key={todo.id}>
        {todo.title}
      </td>

      <td className="p-4 w-4">complete</td>
      <td>
        <div className="flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </span>
          <span className="hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
