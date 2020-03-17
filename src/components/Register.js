import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

import axios from "axios";

const Register = () => {
  const baseURL = "http://localhost:2000/api/user/register";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(name, email, password);
    axios
      .post(baseURL, {
        name: name,
        email: email,
        password: password
      })
      .then(() => {
        console.log("you have registered successfully!");
        history.push("/login");
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
          <h3>User Register</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Your Password"
            />
            <input type="submit" value="Register" />
          </form>
        </div>
      </main>
    </>
  );
};

export default Register;
