import { useState } from "react";
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";
import styles from "./TodoListitem.module.css";
export function TodoListItem({ todo, onUpdate }) {


    const [isEditing, setIsEditing] = useState(false)

    function handleCompleted(event) {
        onUpdate(todo.id, { ...todo, completed: event.target.checked });
    }

    const viewingTemplate = (
        <div className={styles.Content}>
            <input
                type="checkbox"
                name="completed"
                checked={todo.completed}
                onChange={handleCompleted}
                className={styles.Status}
            />

            <div className={styles.Info}>
                {todo.name}

                {todo.description && (
                    <span className={styles.Description}>{todo.description}</span>
                )}

                <div className={styles.AdditionalInfo}>
                    {todo.deadline} {todo.priority !== PRIORITY_DEFAULT && (
                        <span style={{ color: PRIORITIES[todo.priority].color }}>
                            {PRIORITIES[todo.priority].label}
                        </span>)}


                </div>

            </div>
            <button onClick={() => setIsEditing(true)}>📝</button>
        </div>
    )

    const editingTemplate = <div>editing</div>

    return (
        <li
            className={styles.TodoListItem}
            data-completed={todo.completed}
        >
            {isEditing ? editingTemplate : viewingTemplate}

        </li>

    );
}