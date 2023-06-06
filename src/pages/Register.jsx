import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/auth";
import Button from "../components/button/Button";
import "./register.scss";
import { toast } from "react-toastify";
import GoogleLogin from "../components/posts/GoogleLogin";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name };

    if (password !== confirmPassword) {
      toast.error("Confirm password must be same with password");
      return;
    }

    dispatch(register(data, navigate));
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="register-button">
            Register
          </Button>

          <p className="or-divider">Or</p>

          <GoogleLogin buttonText={"Login With Google"} />

          <Link to="/login" className="register-link">
            Already have an account? Login here
          </Link>
        </form>
      </div>
    </div>
  );
}
