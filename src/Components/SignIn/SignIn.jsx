import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import "./Signin.css";
export const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log(response);
      const { data } = response;
      if (data) {
        const { createdUser, encodedToken } = data;
        setAuth({
          user: { ...createdUser },
          token: encodedToken,
          auth: true,
        });

        localStorage.setItem("token", encodedToken);
        navigate("/home");
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const guestLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      });
      const { data } = response;
      if (data) {
        const { createdUser, encodedToken } = data;
        setAuth({
          user: { ...createdUser },
          token: encodedToken,
          auth: true,
        });

        localStorage.setItem("token", encodedToken);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      {" "}
      <div className="login-form">
        <p className="guest-credentials">email: adarshbalika@gmail.com</p>
        <p className="guest-credentials">password: adarshbalika</p>
        <h2 className="login-title">login</h2>
        <form>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              placeholder="xyz@gmail.com"
              className="input"
              name="email"
              onChange={changeHandler}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input"
              name="password"
              onChange={changeHandler}
            />
          </label>

          <div className="password">
            <label htmlFor="remember">
              <input name="checkbox" id="remember" type="checkbox" />
              Remember Me
            </label>
            <a href="#" className="text-decorations password-forgot">
              forgot your password?
            </a>
          </div>
          <button className="login-btn" onClick={loginHandler}>
            login
          </button>
          <button className="login-btn" onClick={guestLogin}>
            guest login
          </button>

          <div className="new-account">
            <Link to="/signup" className="text-decorations account-title">
              create new account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
