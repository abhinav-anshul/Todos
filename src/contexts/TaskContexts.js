import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const [tasks, setTasks] = useState([{ title: "", detail: "", id: uuid() }]);

  useEffect(() => {
    let taskList = JSON.parse(localStorage.getItem("tasks")); // get the data
    if (taskList) {
      setTasks(taskList); // update the state if taskList has data
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, detail) => {
    setTasks([...tasks, { title: title, detail: detail, id: uuid() }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
