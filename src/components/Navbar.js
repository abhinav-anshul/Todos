import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContexts";

const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="navbar">
      <h1>todos</h1>
      <p> Currently I have {tasks.length} Tasks to Accomplish</p>
    </div>
  );
};

export default Navbar;
