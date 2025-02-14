import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      alert("Неверный email или пароль");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/home"); // Перенаправление на домашнюю страницу
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">Sign in to Quickly.</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="signin-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            className="signin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signin-button">Sign in</button>
        </form>
        <p className="signin-footer">
          <a href="/signup" className="signin-link">Don’t have an account? Sign up</a>
        </p>
      </div>
    </div>
  );
}
