import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/todolist/todolistSlice";
const TodoForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({ task: task.trim(), status: "in-progress", id: uuidv4() })
    );
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="*:text-xl *:rounded-md">
      <input
        type="text"
        placeholder="Enter your todo"
        className="h-14 p-2 bg-gray-200"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button type="submit" className="h-14 px-3 ml-2 bg-green-600 text-white">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
