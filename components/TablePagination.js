import React from "react";

const TablePagination = ({
  todo,
  prevClickHandler,
  nxetClickHandler,
  all_page,
  paginate,
  currentPage,
}) => {
  let navigate_num = [];
  for (let i = 1; i <= all_page; i++) {
    navigate_num.push(i);
  }

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
              onClick={() => prevClickHandler()}
              href="#"
              className="relative inline-flex items-center justify-center bg-[#F1F7FF] rounded-lg text-sm font-medium py-1 px-[10px] "
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
                {navigate_num.slice(0, 3).map((number, id) => (
                  <li
                    onClick={() => paginate(number)}
                    className={`py-1 px-[10px] rounded-lg gap-[10px] bg-[#F1F7FF] ${
                      id === currentPage - 1 && "bg-[#1ABBB9]"
                    }`}
                    key={number}
                  >
                    {number}
                  </li>
                ))}
                <li>...</li>
                <li
                  className="py-1 px-[10px] rounded-lg gap-[10px] bg-[#F1F7FF]"
                  onClick={() => paginate(all_page)}
                >
                  {all_page}
                </li>
              </ul>
            </a>

            <a
              onClick={() => nxetClickHandler()}
              href="#"
              className="relative inline-flex items-center justify-center bg-[#F1F7FF] rounded-lg  text-sm font-medium py-1 px-[10px]"
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
