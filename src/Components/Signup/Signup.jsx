import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import "./Signup.css";

export const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = form;
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
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
        navigate("/home");
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-section">
      <div className="signup-form">
        <h2 className="signup-form-title">signup</h2>
        <form>
          <label className="label" htmlFor="fname">
            first name
            <input
              name="firstName"
              onChange={changeHandler}
              type="text"
              id="fname"
              placeholder="enter your first name"
              className="input"
            />
          </label>
          <label className="label" htmlFor="lname">
            last name
            <input
              name="lastName"
              onChange={changeHandler}
              type="text"
              id="lname"
              placeholder="enter your last name"
              className="input"
            />
          </label>
          <label className="label" htmlFor="email">
            Email
            <input
              name="email"
              onChange={changeHandler}
              type="email"
              id="email"
              placeholder="xyz@gmail.com"
              className="input"
            />
          </label>
          <label className="label" htmlFor="password">
            Password
            <input
              name="password"
              onChange={changeHandler}
              type="password"
              id="password"
              placeholder="*********"
              className="input"
            />
          </label>

          <div className="t-and-c">
            <label className="label" htmlFor="t&c">
              <input name="t&c" id="t&c" type="checkbox" />I accept terms and
              condition
            </label>
          </div>
          <button className="signup-btn" onClick={clickHandler}>
            create new account
          </button>
          <div className="have-account">
            <Link to="/" className="text-decorations account">
              already have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
