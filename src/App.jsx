import { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { Alert } from "./components/Alert/Alert";
import styles from "./App.module.css";
import { TodoFilters } from "./components/TodoFilters/TodoFilters";
import { useTodos } from "./hooks/todo";
import { api } from "./api";

function App() {
  const todos = useTodos();
  return (
    <div className={styles.App}>
      <h2>{JSON.stringify(todos.isLoading)}</h2>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/to-do.png" />
        <h2 className={styles.Title}>To-Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        {!!todos.error.message && (
          <Alert onClear={todos.error.clear}> {todos.error.message}</Alert>
        )}
        <TodoForm onCreate={todos.create} />
        <TodoFilters onFilter={todos.filter} />

        <TodoList
          todos={todos.data}
          onUpdate={todos.update}
          onDelete={todos.delete}
        />
      </div>
    </div>
  );
}

export default App;
