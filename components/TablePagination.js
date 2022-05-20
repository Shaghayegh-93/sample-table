import React from "react";

// import { useState, useEffect } from "react";

const TablePagination = ({
  user,
  todo,
  prevClickHandler,
  nxetClickHandler,
  all_page,
  paginate,
  currentPage,
}) => {
  // console.log("all", all_page);

  let navigate_num = [];
  for (let i = 1; i <= all_page; i++) {
    navigate_num.push(i);
  }
  // console.log("navigate: ", navigate_num);
  return (
    <div className=" px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-between ">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              onClick={() => prevClickHandler()}
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
              </svg>
            </a>
            <a
              // onClick={() => paginate(number)}
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center   text-sm font-medium"
            >
              <ul className="flex items-center">
                {navigate_num.slice(0, 3).map((number, id) => (
                  <li
                    onClick={() => paginate(number)}
                    className={`p-1 border ${
                      id === currentPage && "bg-slate-900"
                    }`}
                    key={number}
                  >
                    {number}
                  </li>
                ))}
                <li>...</li>
                <li onClick={() => paginate(all_page)}>{all_page}</li>
              </ul>
            </a>

            <a
              onClick={() => nxetClickHandler()}
              // onClick={() => setCurrentPage((prev) => prev + 1)}
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
