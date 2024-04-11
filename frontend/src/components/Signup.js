import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './formularCss.css';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/");
      } else {
        setErrorMessage(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An error occurred during registration");
    }
  };

  return (
    <div id="formbody">
        <h1>Sign up</h1>
        {errorMessage && <p>{errorMessage}</p> }
        <form onSubmit={handleRegister}>
        <div> 
          <label htmlFor="name">Name</label>
          <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
  
        </div>
        <div> 
          <label htmlFor="email">Email</label>
          <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          
        </div>
        <div> 
          <label htmlFor="password">Password</label>
          <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          
        </div>
        <button type="submit">Register</button>
        </form>
        <p>
          go back <Link to="/">back</Link>
        </p>
    </div>
  );
};

export default Signup;

