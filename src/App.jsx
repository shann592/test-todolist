import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <main className="w-1/2 mt-10 text-center p-5">
        <TodoForm />
        <TodoList />
      </main>
    </div>
  );
};

export default App;
