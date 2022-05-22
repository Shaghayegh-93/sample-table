import React from "react";

const TableRow = ({ user, todo }) => {
  const user_name = user.filter((item) => item.id === todo.userId)[0];
  // console.log("username:", user_name);
  // console.log("usr:", user);

  return (
    <tr className="  px-8 py-4  shadow-[0_0_-1px_0_ rgba(224, 231, 237, 1)] ">
      <>
        <td className="px-3 py-4 gap-2 w-4 text-center">
          <div className="flex items-center justify-center">
            <input
              id="checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "
            ></input>
            <label htmlFor="checkbox" className="sr-only">
              checkbox
            </label>
          </div>
        </td>

        <td className="  p-4 gap-2 w-[160px] h-[68px] text-left " key={user.id}>
          <div className=" flex flex-col whitespace-nowrap items-center px-3 py-4  ">
            <p className="  text-[#828282] font-semibold text-xs leading-[150%]">
              {user_name.name}
            </p>
            <p className=" font-normal text-xs text-[#3333]">
              {user_name.company.name}
            </p>
          </div>
        </td>
      </>
      <td
        className=" p-4 gap-2   hidden sm:block  text-left  w-[160px] h-[68px]  "
        key={user.id}
      >
        <div className="px-3 py-4 flex flex-col items-center whitespace-nowrap text-sm font-normal  text-[#828282] ">
          <p className="leading-[18px]">{user_name.email}</p>
          <p className="">{user_name.phone}</p>
        </div>
      </td>

      <td
        className=" p-4  text-left text-[#828282] w-[160px] h-[68px] font-normal text-xs"
        key={todo.id}
      >
        {todo.title}
      </td>

      <td className="p-4  text-center text-[#18AB56] w-[82px] h-[68px] ">
        <span className="bg-[#F0FFF8] py-2 px-3 rounded-lg">complete</span>
      </td>
      <td>
        <div className="flex items-center justify-center w-20 h-[68px] gap-6 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6  w-6"
              fill="#828282"
              viewBox="0 0 24 24"
              stroke="#828282 "
            >
              <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </span>
          <span className="hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#828282"
              viewBox="0 0 24 24"
              stroke="#828282"
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
