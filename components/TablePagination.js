import React from "react";
import VectorLeft from "../public/svg/VectorLeft.svg";
import VectorRight from "../public/svg/VectorRight.svg";

const TablePagination = ({
  todo,
  all_page,
  currentPage,
  set_paginate_handler,
  navigateNum,
  arrayOfCurrentPages,
}) => {
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
            className="p-2 gap-3  flex items-center justify-center  "
            aria-label="Pagination"
          >
            <a
              onClick={(e) =>
                currentPage === 1
                  ? e.preventDefault()
                  : set_paginate_handler("prev")
              }
              href="#"
              className={` relative inline-flex items-center justify-center bg-[#F1F7FF] rounded-lg  text-sm font-medium py-1 px-[10px]${
                currentPage === 1 && " text-gray-300 cursor-default"
              }`}
            >
              <span className="sr-only">Previous</span>

              <VectorLeft />
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

              <VectorRight />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
