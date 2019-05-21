import React from "react";
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
