import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./todolist/todolistSlice";

export default configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});
