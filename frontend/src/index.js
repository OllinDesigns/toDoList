// esta es clave
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Greeting from "./components/Greeting";
import TodoList from "./components/TodoList";
import reportWebVitals from "./reportWebVitals";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
