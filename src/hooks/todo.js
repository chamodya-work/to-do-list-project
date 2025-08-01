import { useState, useEffect } from 'react';
import { api } from '../api';

export function useTodos(){
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});
  const[errorMessage,setErrorMessage]=useState();
  const[isLoading,setIsLoading]=useState(false);

  async function fetchTodos() {
    setIsLoading(true);
    try {
      const data = await api.todos.getAll(filters);
      setTodos(data);
    } catch (error) {
      setErrorMessage("Failed to fetch todos:", error);
    } finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [filters]);

  async function handleCreate(newTodo) {
    setIsLoading(true);
    try {
      await api.todos.create(newTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Failed to create todos:", error);
    }finally{
      setIsLoading(false);
    }
  }

  async function handleUpdate(id, newTodo) {
    setIsLoading(true);
    try {
      await api.todos.update(id, newTodo);
      await fetchTodos();
    } catch (error) {
      setErrorMessage("Failed to update todos:", error);
    }finally{
      setIsLoading(false);
    }
  }

  async function handleDelete(id) {
    setIsLoading(true);
    try {
      await api.todos.delete(id);
      await fetchTodos();
    } catch (error) {
      setErrorMessager("Failed to delete todos:", error);
    }finally{
      setIsLoading(false);
    }
  }

  return{
    isLoading,
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

