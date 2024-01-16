import React, { useState } from "react";
import SearchTask from "./searceTack";
import TaskActions from "./taskAction";
import TaskList from "./taskList";
import AddTaskMdal from "./addTaskModal";

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

  const handleAddTask = (newTask) => {
    console.log("adding a task", newTask);
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskMdal onSave={handleAddTask} />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            handleAddTask={() => {
              setShowAddModal(true);
            }}
          />

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskManeger;
