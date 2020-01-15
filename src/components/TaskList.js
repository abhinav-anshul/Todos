import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContexts";
import TaskDetails from "./TaskDetails";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  return tasks.length ? (
    <div className="book-list">
      <ul>
        {tasks.map(task => {
          return <TaskDetails task={task} key={task.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Nothing to do. Hello free time !!</div>
  );
};

export default TaskList;
