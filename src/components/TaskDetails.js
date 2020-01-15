import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContexts";

const TaskDetails = ({ task }) => {
  const { removeTask } = useContext(TaskContext);
  return (
    <li onClick={() => removeTask(task.id)}>
      <div className="title">{task.title}</div>
      <div className="author">{task.detail}</div>
    </li>
  );
};

export default TaskDetails;
