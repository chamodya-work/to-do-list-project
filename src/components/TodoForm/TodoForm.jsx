
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PRIORITY_DEFAULT } from "../../constants/priorities";
import styles from "./TodoForm.module.css";
import { TodoFormFields } from "../TodoFormFields/TodoFormFields";

export function TodoForm({ onCreate }) {

    const [showAllFields, setShowAllFields] = useState(true)
    const { register, handleSubmit, reset } = useForm()

    function handleCreate(event) {
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

            <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>

                <TodoFormFields showAllFields={showAllFields} register={register} />

                <input type="submit" value="Add" />
            </form>
        </section>
    );
}