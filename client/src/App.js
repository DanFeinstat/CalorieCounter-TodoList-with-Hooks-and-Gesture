import React from "react";
import Todo from "./todo/todo";
import CalorieCount from "./calorieCount/CalorieCount";
import PageViewer from "./PageViewer/PageViewer";
import "./App.css";
import { AppContextProvider } from "./context/context";

function App() {
  return (
    <AppContextProvider>
      <PageViewer />
    </AppContextProvider>
  );
}

export default App;
