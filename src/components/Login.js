import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

import axios from "axios";

const Login = () => {
  const baseURL = "http://localhost:2000/api/user/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(email, password);
    axios
      .post(baseURL, {
        email: email,
        password: password
      })
      .then(res => {
        console.log("you have logedin successfully!");
        localStorage.setItem("token", res.data.token);
        history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Header />
      <main>
        <div className="form-wrrap">
          <h3>User Login</h3>
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              type="email"
              placeholder="Enter Your Email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <input
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter Your Password"
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
