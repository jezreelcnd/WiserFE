import React from "react";
import AddTodo from "../../components/Todos/AddTodo";
import TodoList from "../../components/Todos/TodoList";
import VisibilityFilters from "../../components/Todos/VisibilityFilters";
import "../../styles/styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}