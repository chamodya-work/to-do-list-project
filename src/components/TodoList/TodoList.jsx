import styles from "./TodoList.module.css";
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";
import { TodoListItem } from "../TodoListitem/TodoListitem";

export function TodoList({ todos, onUpdate, onDelete }) {
  return (
    <section>
      <h3>To-Do's</h3>
      {!todos.length && <p>⚠️Sorry, you don't have To-Do's</p>}

      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
