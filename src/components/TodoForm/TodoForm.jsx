
import { useState } from "react";
import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";

import styles from "./TodoForm.module.css";

export function TodoForm({ onCreate }) {

    const [showAllFields, setShowAllFields] = useState(true)

    function handleSubmit(event) {
        event.preventDefault();

        const { elements } = event.target
        if (elements.name.value === "") {
            return;
        }
        onCreate({
            name: elements.name.value,
            description: elements.description?.value ?? "",
            deadline: elements.deadline?.value ?? "",
            priority: elements.priority?.value ?? PRIORITY_DEFAULT,
            completed: false
        }
        )
        event.target.reset();

    }
    return (
        <section>
            <h3 className={styles.Title}>New To-Do
                <button onClick={() => setShowAllFields(!showAllFields)}>
                    {showAllFields ? "Hide" : "show"} all fields</button>
            </h3>

            <form className={styles.Form} onSubmit={handleSubmit}>
                <div className={styles.FormFields}>
                    <div className={styles.FormField}>
                        <input
                            type="text"
                            aria-label="Name*"
                            placeholder="Name*"
                            name="name"
                            autoComplete="off"
                        />
                    </div>

                    {showAllFields && (
                        <><div className={styles.FormField}>
                            <textarea
                                aria-label="Description"
                                placeholder="Description"
                                name="description"
                                rows="3"
                            />
                        </div>

                            <div className={styles.FormGroup}>
                                <div className={styles.FormField}>
                                    <label htmlFor="deadline">Deadline</label>
                                    <input type="date" id="deadline" name="deadline" />
                                </div>

                                <div className={styles.FormField}>
                                    <label htmlFor="priority">Priority</label>
                                    <select defaultValue={PRIORITY_DEFAULT} id="priority" name="priority">

                                        {Object.entries(PRIORITIES).map(([key, { label }]) =>

                                            <option key={key} value="key">{label}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </>)
                    }
                </div>

                <input type="submit" value="Add" />
            </form>
        </section>
    );
}