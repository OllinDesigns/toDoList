import React from 'react';
import './TodoList.css'
// import {  BrowserRouter as Link } from 'react-router-dom';

function Greeting() {
  return (
    <div id="todo-list-container" className="todo-list-container">
      <h1>Welcome to My App!</h1>
      <p>This is a simple React component rendered by the backend.</p>
      <p>
      
       
      </p>
      <p>Click the link beside to go to the Todo List: 
      <a href="http://localhost:3000/todolist"> todoList React</a>
        </p>

        <p>Click the link beside to sign up: 
      <a href="http://localhost:3000/signup"> Sign Up</a>
        </p>
    </div>
  );
}

export default Greeting;
