import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import TablePagination from "./TablePagination";
import { useState, useEffect } from "react";

const Main = ({ todo, user }) => {
  const [todo_state, set_todo_state] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  // const [sortProducts, setSortProducts] = useState([]);
  // const[sort,setSort]=useState("des")
  const count_page = 10;
  const all_page = todo.length / count_page;
  console.log("todo", todo);

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

    console.log(currentPage);
  };
  const nxetClickHandler = () => {
    currentPage < all_page && setCurrentPage(currentPage + 1);
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const changeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    // setSearch("");
  };
  const filterdTodo = todo.filter((td) =>
    td.title.toLowerCase().includes(search)
  );
  console.log("search", search);
  console.log(todo.filter((t) => t.title.toLowerCase().includes("qu")));
  const searchHandler = (e) => {
    if (e.key === "Enter") {
      //   setSearch(filterdTodo);
      // setSearch("");
      // }
    }
  };

  return (
    <div className="bg-white m-auto mt-7 rounded-xl  mx-auto">
      <Navbar
        search={search}
        changeHandler={changeHandler}
        searchHandler={searchHandler}
        filterdTodo={filterdTodo}
      />
      <Table todo={todo_state} user={user} filterdTodo={filterdTodo} />
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
