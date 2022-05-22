import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import TablePagination from "./TablePagination";
import { useState, useEffect } from "react";

const Main = ({ todo, user }) => {
  const [todo_state, set_todo_state] = useState([]);
  console.log("todo_state:", todo_state);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const count_page = 10;
  const all_page = todo.length / count_page;

  useEffect(() => {
    const next_page = currentPage * count_page;
    const prev_page = (currentPage - 1) * count_page;
    let data = todo.slice(prev_page, next_page);
    set_todo_state(data);
  }, [todo, currentPage]);
  const prevClickHandler = () => {
    currentPage > 1 &&
      currentPage < all_page &&
      setCurrentPage(currentPage - 1);
  };
  const nxetClickHandler = () => {
    currentPage < all_page && setCurrentPage(currentPage + 1);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let filterdTodo = todo.filter((td) =>
    td.title.toLowerCase().includes(search)
  );

  console.log("search", search);
  console.log(
    "searchhhhhhhhhh",
    todo.filter((t) => t.title.toLowerCase().includes("quis"))
  );
  const changeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const searchHandler = (e) => {
    if (e.key === "Enter") {
      set_todo_state(filterdTodo);
      setSearch("");
    }
  };

  return (
    <div className="bg-white m-auto mt-7 rounded-xl px-4  xl:w-[1258px] ">
      <Navbar
        search={search}
        changeHandler={changeHandler}
        searchHandler={searchHandler}
        filterdTodo={filterdTodo}
        todo_state={todo_state}
      />
      <Table
        todo={filterdTodo}
        user={user}
        filterdTodo={filterdTodo}
        todo_state={todo_state}
      />
      <TablePagination
        filterdTodo={filterdTodo}
        todo_state={todo_state}
        user={user}
        prevClickHandler={prevClickHandler}
        nxetClickHandler={nxetClickHandler}
        all_page={all_page}
        paginate={paginate}
        currentPage={currentPage}
        todo={todo}
      />
    </div>
  );
};

export default Main;
