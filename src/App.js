import React from "react";
import Navbar from "./components/Navbar";
import TaskContextProvider from "./contexts/TaskContexts";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <TaskList />
        <TaskForm />
      </TaskContextProvider>
    </div>
  );
}

export default App;
