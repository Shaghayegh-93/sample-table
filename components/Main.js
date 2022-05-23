import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import TablePagination from "./TablePagination";
import { useState, useEffect } from "react";

const Main = ({ todo, user }) => {
  const [paginated_data, set_paginated_data] = useState([]);
  const [sort_type, set_sort_type] = useState({
    type: "asc",
    value: "todo",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filter_state, set_filter_state] = useState(todo);
  const [sort_data, set_sort_data] = useState(filter_state);
  const count_page = 10;
  const all_page = Math.round(sort_data.length / count_page);
  console.log("sortData", sort_data);

  useEffect(() => {
    const next_page = currentPage * count_page;
    const prev_page = (currentPage - 1) * count_page;
    let data = sort_data.slice(prev_page, next_page);
    set_paginated_data(data);
  }, [sort_data, currentPage]);
  const set_paginate_handler = (type) => {
    if (type === "next") {
      currentPage < all_page && setCurrentPage(currentPage + 1);
    } else if (type === "prev") {
      currentPage > 1 &&
        currentPage < all_page &&
        setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(type);
    }
  };

  const changeHandler = (e) => {
    e.preventDefault();
    const word = e.target.value;
    setSearch(word);
    const filtered = todo.filter((td) => td.title.toLowerCase().includes(word));
    set_filter_state(filtered);
  };

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      setSearch("");
    }
  };

  const compareFn = (a, b, key) => {
    if (a[key] > b[key]) return +1;
    else if (a[key] < b[key]) return -1;
    else return 0;
  };

  const sortHandler = (type, value, filter) => {
    set_sort_type({ type, value });
  };
  useEffect(() => {
    let my_sort_data = [];
    console.log(sort_type);
    if (sort_type.value === "todo") {
      const current_filter_state = [...filter_state];
      if (sort_type.type === "asc") {
        my_sort_data = current_filter_state.sort((a, b) =>
          compareFn(a, b, "title")
        );
      } else {
        my_sort_data = current_filter_state
          .sort((a, b) => compareFn(a, b, "title"))
          .reverse();
      }
    } else if (sort_type.value === "completed") {
      const current_filter_state = [...filter_state];

      const my_func = (a, b) => {
        if (Number(a.completed) > Number(b.completed)) return +1;
        else if (Number(a.completed) < Number(b.completed)) return -1;
        else return 0;
      };
      if (sort_type.type === "asc") {
        my_sort_data = current_filter_state.sort((a, b) => my_func(a, b));
      } else {
        my_sort_data = current_filter_state
          .sort((a, b) => my_func(a, b))
          .reverse();
      }
    }
    set_sort_data(my_sort_data);
  }, [filter_state, sort_type]);
  return (
    <div className="bg-white m-auto mt-7 rounded-xl px-4  xl:w-[1258px] ">
      <Navbar
        search={search}
        changeHandler={changeHandler}
        searchHandler={searchHandler}
        filterdTodo={filter_state}
        todo_state={paginated_data}
      />
      <Table user={user} sortHandler={sortHandler} data={paginated_data} />
      <TablePagination
        filterdTodo={filter_state}
        todo_state={paginated_data}
        user={user}
        set_paginate_handler={set_paginate_handler}
        all_page={all_page}
        currentPage={currentPage}
        todo={todo}
      />
    </div>
  );
};
export default Main;
