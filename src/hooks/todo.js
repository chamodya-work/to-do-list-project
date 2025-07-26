import { useState, useEffect } from 'react';
import { api } from '../api';

export function useTodos(){
    const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});
  const[errorMessage,setErrorMessage]=useState();

  async function fetchTodos() {
    try {
      const data = await api.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  async function handleCreate(newTodo) {
    try {
      await api.todos.create(newTodo);
      await fetchTodos();
    } catch (error) {
      console.error("Failed to create todos:", error);
    }
  }

  async function handleUpdate(id, newTodo) {
    try {
      await api.todos.update(id, newTodo);
      await fetchTodos();
    } catch (error) {
      console.error("Failed to update todos:", error);
    }
  }

  async function handleDelete(id) {
    try {
      await api.todos.delete(id);
      await fetchTodos();
    } catch (error) {
      console.error("Failed to delete todos:", error);
    }
  }

  return{
    data: todos,
    fetch: fetchTodos,
    filter:setFilters,
    create: handleCreate,
    update: handleUpdate,
    delete: handleDelete,
    error:{
        message: errorMessage,
        clear: ()=>setErrorMessage(),
    }
  }

}

