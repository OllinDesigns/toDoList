import React from 'react';
// import {  BrowserRouter as Link } from 'react-router-dom';

function Greeting() {
  return (
    <div>
      <h1>Welcome to My App!</h1>
      <p>This is a simple React component rendered by the backend.</p>
      <p>
        Click to the{" "}
        <a href="http://localhost:3000/todo/index.html">todoList</a>
       
      </p>
      <p>Click the link below to go to the Todo List:
      <a href="http://localhost:3000/todolist">todoList React</a>
        </p>
    </div>
  );
}

export default Greeting;