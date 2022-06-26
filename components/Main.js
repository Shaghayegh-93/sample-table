import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import TablePagination from "./TablePagination";
import { useState, useEffect } from "react";

const Main = ({ todo, user }) => {
  const [paginated_data, set_paginated_data] = useState([]);
  const [selectedToDo, setSelectedToDo] = useState([]);

  const [sort_type, set_sort_type] = useState(
    {
      type: "",
      value: "todo",
    },
    {
      type: "",
      value: "contact",
    }
  );
  const [currentPage, setCurrentPage] = useState(1);

  // filter and sort todo jason
  const [filter_state, set_filter_state] = useState(todo);

  const [sort_data, set_sort_data] = useState(filter_state);

  const [filter_user_state, set_filter_user_state] = useState(user);

  // pagination
  const [arrayOfCurrentPages, setArrayOfCurrentPages] = useState([]); // state to diplay first,last and couple between pages
  const count_page = 10;
  const all_page = Math.round(sort_data.length / count_page);

  let navigate_num = [];
  for (let i = 1; i <= all_page; i++) {
    navigate_num.push(i);
  }

  const [search, setSearch] = useState("");
  // toggle single row
  const toggleData = (value) => {
    const selectedItem = [...selectedToDo];
    const index = selectedItem.findIndex((item) => item === value);

    if (index === -1) {
      selectedItem.push(value);
      setSelectedToDo(selectedItem);
    } else {
      let updatedItem = selectedItem.filter((item) => item !== value);
      setSelectedToDo(updatedItem);
    }
  };
  // toggle all row
  const toggleAllData = (is_checked) => {
    const selectedItem = [...selectedToDo];
    if (is_checked) {
      paginated_data.forEach((key) => {
        if (selectedItem.findIndex((item) => item === key.id) === -1) {
          selectedItem.push(key.id);
        }
      });
      setSelectedToDo(selectedItem);
    } else {
      setSelectedToDo([]);
    }
  };

  // filter and sort json user

  useEffect(() => {
    const next_page = currentPage * count_page;
    const prev_page = (currentPage - 1) * count_page;

    let data = sort_data.slice(prev_page, next_page);
    set_paginated_data(data);
  }, [sort_data, currentPage]);

  // pagination
  useEffect(() => {
    let tempNumberOfPage = [...arrayOfCurrentPages];
    let dotsInitial = "...";
    let dotsLeft = "...";
    let dotsRight = "...";

    if (currentPage >= 1 && currentPage <= 3 && all_page <= 3) {
      const sliced = navigate_num.slice(0, 3);
      tempNumberOfPage = [...sliced];
    } else if (currentPage === 1 && all_page <= 6) {
      const sliced = navigate_num.slice(0, 5);
      tempNumberOfPage = [...sliced];
    } else if (currentPage >= 1 && currentPage <= 3 && all_page > 6) {
      tempNumberOfPage = [1, 2, 3, 4, dotsInitial, navigate_num.length];
    } else if (currentPage === 4 && all_page > 6) {
      const sliced = navigate_num.slice(0, 5);
      tempNumberOfPage = [...sliced, dotsInitial, navigate_num.length];
    } else if (currentPage > 4 && currentPage < navigate_num.length - 2) {
      const sliced1 = navigate_num.slice(currentPage - 2, currentPage);
      const sliced2 = navigate_num.slice(currentPage, currentPage + 1);
      tempNumberOfPage = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        navigate_num.length,
      ];
    } else if (currentPage > navigate_num.length - 3) {
      const sliced = navigate_num.slice(navigate_num.length - 4);
      tempNumberOfPage = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      setCurrentPage(arrayOfCurrentPages[arrayOfCurrentPages.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      setCurrentPage(arrayOfCurrentPages[3] + 2);
    } else if (currentPage === dotsLeft) {
      setCurrentPage(arrayOfCurrentPages[3] - 2);
    }
    setArrayOfCurrentPages(tempNumberOfPage);
  }, [currentPage, all_page]);

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

    if (!filtered.length) {
      const user_filtered = user.filter((item) =>
        item.email.toLowerCase().includes(word).toLowerCase()
      );

      set_filter_user_state(user_filtered);
      console.log("filterussssser:", filter_user_state);

      const custom_data = [...paginated_data];
      const user_filter_data = custom_data.filter((item) => {
        return item.userId === user_filtered[0].id;
      });
      set_paginated_data(user_filter_data);
      console.log("paginatedData:", paginated_data);
    } else {
      set_filter_state(filtered);
    }
  };

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      setSearch("");
    }
  };

  const compareFn = (a, b) => {
    if (a > b) return +1;
    else if (a < b) return -1;
    else return 0;
  };

  const sortHandler = (type, value) => {
    set_sort_type({ type, value });
  };
  useEffect(() => {
    let my_sort_data = [];
    if (sort_type.value === "todo") {
      const current_filter_state = [...filter_state];
      if (sort_type.type === "asc") {
        my_sort_data = current_filter_state.sort(({ title: a }, { title: b }) =>
          compareFn(a, b)
        );
      } else {
        my_sort_data = current_filter_state
          .sort(({ title: a }, { title: b }) => compareFn(a, b))
          .reverse();
      }
    }

    set_sort_data(my_sort_data);
    setCurrentPage(1);
  }, [filter_state, sort_type]);

  return (
    <div className="bg-white m-auto my-7 rounded-xl px-4   xl:w-[1258px] ">
      <Navbar
        search={search}
        changeHandler={changeHandler}
        searchHandler={searchHandler}
        filterdTodo={filter_state}
        todo_state={paginated_data}
      />
      <Table
        user={filter_user_state}
        sortHandler={sortHandler}
        data={paginated_data}
        sort_type={sort_type}
        toggleData={toggleData}
        selectedItems={selectedToDo}
        toggleAllData={toggleAllData}
      />
      <TablePagination
        filterdTodo={filter_state}
        filter_state={filter_state}
        paginated_data={paginated_data}
        user={filter_user_state}
        set_paginate_handler={set_paginate_handler}
        all_page={all_page}
        currentPage={currentPage}
        todo={filter_state}
        navigate_num={navigate_num}
        arrayOfCurrentPages={arrayOfCurrentPages}
        search={search}
      />
    </div>
  );
};
export default Main;
