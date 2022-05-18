import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import TablePagination from "./TablePagination";
import { useState, useEffect } from "react";

const Main = ({ todo, user }) => {
  console.log("todo", todo);
  const [todo_state, set_todo_state] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  // console.log("current-page", currentPage);
  const count_page = 10;
  const all_page = todo.length / count_page;
  // console.log("alll-page: ", all_page);
  useEffect(() => {
    // console.log("prev-page", prev_page);

    const next_page = currentPage * count_page;
    const prev_page = (currentPage - 1) * count_page;
    let data = todo.slice(prev_page, next_page);
    set_todo_state(data);
  }, [todo, currentPage]);
  const prevClickHandler = () => {
    currentPage > 1 &&
      currentPage < all_page &&
      setCurrentPage(currentPage - 1);

    console.log(currentPage);
  };
  const nxetClickHandler = () => {
    currentPage < all_page && setCurrentPage(currentPage + 1);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white m-auto mt-7 rounded-xl  mx-auto">
      <Navbar />
      <Table todo={todo_state} user={user} />
      <TablePagination
        todo={todo_state}
        user={user}
        prevClickHandler={prevClickHandler}
        nxetClickHandler={nxetClickHandler}
        all_page={all_page}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Main;
