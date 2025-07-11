import { PRIORITIES, PRIORITY_DEFAULT } from "../../constants/priorities";
import styles from "./TodoFormFields.module.css";

export function TodoFormFields({
  todo = {},
  showAllFields = true,
  register,
  errors = {},
}) {
  return (
    <div className={styles.FormFields}>
      <div className={styles.FormField}>
        <input
          type="text"
          aria-label="Name*"
          placeholder="Name*"
          autoComplete="off"
          defaultValue={todo.name}
          {...register("name", {
            required: "name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
            maxLength: {
              value: 50,
              message: "Name must be at most 50 characters long",
            },
          })}
        />
        {!!errors.name && (
          <span className={styles.FormFieldError}> {errors.name.message}</span>
        )}
      </div>

      {showAllFields && (
        <>
          <div className={styles.FormField}>
            <textarea
              aria-label="Description"
              placeholder="Description"
              rows="3"
              defaultValue={todo.description}
              {...register("description", {
                maxLength: {
                  value: 50,
                  message: "Description must be at most 50 characters long",
                },
              })}
            />
            {!!errors.description && (
              <span className={styles.FormFieldError}>
                {errors.description.message}
              </span>
            )}
          </div>

          <div className={styles.FormGroup}>
            <div className={styles.FormField}>
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                defaultValue={todo.deadline}
                {...register("deadline", {
                  min: !todo.id && {
                    value: new Date().toISOString().split("T")[0],
                    message: "Deadline cant be date in the past",
                  },
                })}
              />
              {!!errors.deadline && (
                <span className={styles.FormFieldError}>
                  {errors.deadline.message}
                </span>
              )}
            </div>

            <div className={styles.FormField}>
              <label htmlFor="priority">Priority</label>
              <select
                defaultValue={todo.priority ?? PRIORITY_DEFAULT}
                id="priority"
                {...register("priority", {
                  validate: (value) =>
                    Object.keys(PRIORITIES).includes(value) ||
                    "prority is not valid",
                })}
              >
                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
              {!!errors.priority && (
                <span className={styles.FormFieldError}>
                  {errors.priority.message}
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
