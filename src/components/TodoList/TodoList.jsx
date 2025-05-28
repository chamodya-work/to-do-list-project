export function TodoList({ todos }) {
    return (
        <section>
            <h3>To-Do's</h3>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.name}
                        <br />
                        {todo.description}
                        <br />
                        {todo.deadline} {todo.priority}
                    </li>
                ))}
            </ul>

        </section>
    );
}