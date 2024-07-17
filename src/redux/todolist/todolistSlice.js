import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: {
    todolist: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.todolist = [...state.todolist, action.payload];
    },
    removeTask: (state, action) => {
      state.todolist = state.todolist.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = todolistSlice.actions;

export default todolistSlice.reducer;
