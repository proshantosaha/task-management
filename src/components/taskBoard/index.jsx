import React, { useState } from "react";
import SearchTask from "./searceTack";
import TaskActions from "./taskAction";
import TaskList from "./taskList";

const TaskManeger = () => {
  const defaultTask = {
    id: "crypto.randonUUID()",
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "react", "js"],
    priority: "high",
    isFavourite: true,
  };

  const handleAddTask = () => {
    console.log("adding a task");
  };

  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions handleAddTask={handleAddTask} />

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskManeger;
