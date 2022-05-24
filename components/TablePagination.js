import React from "react";

const TablePagination = ({
  todo,
  all_page,
  currentPage,
  set_paginate_handler,
  navigate_num,
  arrayOfCurrentPages,
}) => {
  // console.log("navigate", navigate_num[3]);

  return (
    <div className="  sm:px-6">
      <div className="   ">
        <div className="flex flex-col items-center justify-center py-4 md:justify-between md:flex-row  ">
          <div className="pb-5  ">
            <p className="text-sm  ">
              Showing
              <span className="font-medium px-1">{currentPage * 10}</span>
              to
              <span className="font-medium px-1">
                {currentPage >= 20 ? todo.length : (currentPage + 1) * 10}
              </span>
              of
              <span className="font-medium px-1">
                {currentPage >= 20 ? "" : todo.length}
              </span>
              entries
            </p>
          </div>
          <nav
            className="p-2 gap-3  flex items-center justify-center"
            aria-label="Pagination"
          >
            <a
              onClick={(e) =>
                currentPage === 1
                  ? e.preventDefault()
                  : set_paginate_handler("prev")
              }
              href="#"
              className={`relative inline-flex items-center justify-center bg-[#F1F7FF] rounded-lg  text-sm font-medium py-1 px-[10px] ${
                currentPage === 1 && " text-gray-300 cursor-default"
              }`}
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
              href="#"
              aria-current="page"
              className=" relative inline-flex items-center   text-sm font-medium"
            >
              <ul className="flex items-center gap-[10px]">
                {arrayOfCurrentPages.map((numberOfPage, id) => (
                  <li
                    onClick={() => set_paginate_handler(numberOfPage)}
                    className={`py-1 px-[10px] rounded-lg gap-[10px] bg-[#F1F7FF] ${
                      numberOfPage === currentPage && "bg-[#1ABBB9]"
                    }`}
                    key={numberOfPage}
                  >
                    {numberOfPage}
                  </li>
                ))}
                {/* <li>...</li>
                <li
                  className="py-1 px-[10px] rounded-lg gap-[10px] bg-[#F1F7FF]"
                  onClick={() => set_paginate_handler(all_page)}
                >
                  {all_page}
                </li> */}
              </ul>
            </a>

            <a
              onClick={(e) =>
                currentPage === all_page
                  ? e.preventDefault()
                  : set_paginate_handler("next")
              }
              href="#"
              className={`relative inline-flex items-center justify-center bg-[#F1F7FF] rounded-lg  text-sm font-medium py-1 px-[10px] ${
                currentPage === all_page && " text-gray-300 cursor-default"
              }`}
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
