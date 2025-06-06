import { useState } from 'react';
import styles from './TodoFilters.module.css';
export function TodoFilters() {
    const [completed, setComplted] = useState("all");
    const [priority, setPriority] = useState("all");
    return (
        <section>
            <h3>Filters</h3>
            <div className={styles.Filters}>
                <label htmlFor="completed">Completed</label>
                <select id="completed" defaultValue={completed} onChange={(event) => setComplted(event.target.value)}>
                    <option value="all">All</option>
                    <option value="active" >Active</option>
                    <option value="completed">Completed</option>
                </select>
                <label htmlFor="priority">Priority</label>
                <select id="priority" defaultValue={priority} onChange={(event) => setPriority(event.target.value)}>
                    <option value="all">All</option>
                    <option value="low" >Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>

                </select>
            </div>

        </section>
    )

}