import React from "react";
import VectorLeft from "../public/svg/VectorLeft.svg";
import VectorRight from "../public/svg/VectorRight.svg";

const TablePagination = ({
  todo,
  all_page,
  currentPage,
  set_paginate_handler,
  arrayOfCurrentPages,
  paginated_data,
}) => {
  return (
    <div className=" px-2  ">
      <div className="   ">
        <div className="flex flex-col items-center justify-center py-4 md:justify-between md:flex-row  ">
          <div className="pb-5  ">
            <p className="text-sm  ">
              Showing
              <span className="font-medium px-1">
                {currentPage > 1
                  ? (currentPage - 1) * paginated_data.length
                  : 1}
              </span>
              to
              <span className="font-medium px-1">
                {currentPage * paginated_data.length}
              </span>
              of
              <span className="font-medium px-1">{todo.length}</span>
              entries
            </p>
          </div>
          <nav
            className=" gap-3  flex items-center justify-center "
            aria-label="Pagination"
          >
            {arrayOfCurrentPages.length > 1 && (
              <a
                onClick={(e) =>
                  currentPage === 1
                    ? e.preventDefault()
                    : set_paginate_handler("prev")
                }
                href="#"
                className={`hover:bg-[#1ABBB9] paginatIconColor  relative inline-flex items-center justify-center bg-[#F1F7FF] rounded-lg  text-sm font-medium py-[10px] px-[10px] ${
                  currentPage === 1 && " text-gray-300 cursor-pointer"
                }`}
              >
                <span className="sr-only">Previous</span>

                <VectorLeft />
              </a>
            )}
            <a
              href="#"
              aria-current="page"
              className=" relative inline-flex items-center   text-sm font-medium"
            >
              <ul className="flex items-center gap-[10px] ">
                {arrayOfCurrentPages.map((numberOfPage, id) => (
                  <li
                    onClick={() => set_paginate_handler(numberOfPage)}
                    className={`py-1 px-[10px] rounded-lg gap-[10px] bg-[#F1F7FF] min-w-min hover:bg-[#1ABBB9] hover:text-white  ${
                      numberOfPage === currentPage && "bg-[#1ABBB9] text-white"
                    }`}
                    key={numberOfPage}
                  >
                    {numberOfPage}
                  </li>
                ))}
              </ul>
            </a>

            {arrayOfCurrentPages.length > 1 && (
              <a
                onClick={(e) =>
                  currentPage === all_page
                    ? e.preventDefault()
                    : set_paginate_handler("next")
                }
                href="#"
                className={`hover:bg-[#1ABBB9] paginatIconColor  hover:stroke-white relative inline-flex items-center justify-center bg-[#F1F7FF] rounded-lg  text-sm font-medium py-[10px] px-[10px]  ${
                  currentPage === all_page && " text-gray-300 cursor-default"
                }`}
              >
                <span className="sr-only">Next</span>

                <VectorRight />
              </a>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
