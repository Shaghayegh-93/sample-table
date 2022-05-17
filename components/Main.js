import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";

const Main = ({ todo, user }) => {
  // console.log(user);
  return (
    <div className="bg-white m-auto mt-7 rounded-xl  mx-auto">
      <Navbar />
      <Table todo={todo} user={user} />
    </div>
  );
};

export default Main;
