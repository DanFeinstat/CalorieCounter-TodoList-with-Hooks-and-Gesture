import React from "react";
import logo from "./logo.svg";
import Todo from "./todo/todo";
import "./App.css";
import { TaskProvider } from "./context/context";

function App() {
  return (
    <TaskProvider>
      <Todo />
    </TaskProvider>
  );
}

export default App;
