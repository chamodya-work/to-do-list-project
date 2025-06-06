export function TodoFilters() {
    return (
        <section>Add commentMore actions
            <h3>Filters</h3>

            <div className={styles.Filters}>
                <label htmlFor="completed">Completed</label>
                <select
                    id="completed"
                    defaultValue={completed}
                    onChange={(event) => setCompleted(event.target.value)}
                >
                    <option value="all">All</option>
                    <option value="active">Action</option>
                    <option value="completed">Completed</option>

            </div>
        </section>
    )
}