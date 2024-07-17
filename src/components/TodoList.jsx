import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/todolist/todolistSlice";
const TodoList = () => {
  const { todolist: todos } = useSelector((state) => state.todolist);
  const dispatch = useDispatch();
  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };
  return (
    <ul className="flex flex-col items-center gap-4 mt-10">
      {todos.length > 0 &&
        todos.map((t) => (
          <li
            className="min-h-14 w-1/2 text-xl rounded-md border-[1px] border-[#c6c6c6] flex justify-between items-center py-2 px-5 shadow-md"
            key={t.id}
          >
            <span>{t.task}</span>
            <input
              type="checkbox"
              className="p-4 cursor-pointer"
              onChange={() => handleRemoveTask(t.id)}
            />
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
