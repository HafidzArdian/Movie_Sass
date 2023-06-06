import "./login.scss";

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Button from "../components/button/Button";
import { login } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };
    dispatch(login(data, navigate));
  };

  return (
    <div className="login-container">
      
      <div className="login-form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="login-button ">
            Login
          </Button>

          <Link to="/register" className="register-link">
            Don't have an account? Register here
            <Button className="register-button">Register</Button>
          </Link>
          <Button className="btn small back"><Link to={'/'}>Home</Link></Button>
        </form>
      </div>
    </div>
  );
}
