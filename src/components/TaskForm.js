import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContexts";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    //console.log(title, author);
    addTask(title, detail);
    setTitle("");
    setDetail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Detail"
        value={detail}
        onChange={e => setDetail(e.target.value)}
        required
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};

export default TaskForm;

// import React, { useContext, useState } from "react";
// import { TaskContext } from "../contexts/TaskContexts";

// const NewTaskForm = () => {
//   const { addTask } = useContext(TaskContext);
//   const [title, setTitle] = useState("");
//   const [detail, setDetail] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();

//     addTask(title, detail);
//     setTitle("");
//     setDetail("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="task title"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="detail"
//         value={detail}
//         onChange={e => setDetail(e.target.value)}
//         required
//       />
//       <input type="submit" value="add task" />
//     </form>
//   );
// };

// export default NewTaskForm;
