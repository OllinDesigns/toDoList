import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/todo/'); // Adjusted API endpoint for fetching todos
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleCreateTodo = async () => {
    try {
      await axios.post('/todo/', { item: newTodo }); // Adjusted API endpoint for creating a todo
      setNewTodo('');
      fetchTodos();
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`/todo/${id}`); // Adjusted API endpoint for deleting a todo
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      await axios.put(`/todo/${id}`, { completed }); // Adjusted API endpoint for updating a todo
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div id="todo-list-container" className="todo-list-container">
      <h2>Todo List</h2>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleCreateTodo}>Add Todo</button>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo._id} className="todo-item">
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.item}</span>
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
            <input type="checkbox" id={`complete-${todo._id}`} checked={todo.completed} onChange={(e) => handleToggleComplete(todo._id, e.target.checked)} />
            <label htmlFor={`complete-${todo._id}`}>Complete</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
