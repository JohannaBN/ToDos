import React from "react";
import { ToDoProvider } from "./contexts/ToDoContext";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <ToDoProvider>
        <div>
          <ToDoForm />
          <ToDoList />
        </div>
      </ToDoProvider>
    </>
  );
};

export default App;
