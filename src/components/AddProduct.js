import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";

import axios from "axios";

const AddProduct = () => {
  const baseURL = "http://localhost:2000/api/products";

  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token")
    }
  };
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  let history = useHistory();
  const handleSubmit = e => {
    const newProduct = {
      title: title,
      price: price
    };
    e.preventDefault();
    axios
      .post(baseURL, newProduct, config)
      .then(() => {
        console.log("New product added successfully!");
        history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-wrrap">
        <h3>Add Product</h3>
        <div className="form-wrrap">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter Title"
            />
            <input
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Enter Price"
            />
            <input type="submit" value="Add Product" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
