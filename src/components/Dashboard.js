import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "./Sidebar";

const Dashboard = () => {
  const baseURL = "http://localhost:2000/api/products";

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    axios
      .get(baseURL)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token")
    }
  };
  const removeProduct = id => {
    axios
      .delete(`${baseURL}/${id}`, config)
      .then(() => {
        console.log("Product removed successfully!");
        // setProducts(products.filter(product => product._id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-wrrap">
        <h3>Dashboard</h3>
        <ul className="dash-prod">
          {products.map(product => {
            return (
              <li key={product._id}>
                <h4>{product.title}</h4>
                <Link to={`/edit-product/${product._id}`}>Edit</Link>
                <button
                  className="btn-delete"
                  onClick={() => removeProduct(product._id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
