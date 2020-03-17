import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

import axios from "axios";

const EditProduct = () => {
  let { id } = useParams();
  const baseURL = `http://localhost:2000/api/products/${id}`;

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);
  const getProduct = () => {
    axios
      .get(baseURL)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  let history = useHistory();
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token")
    }
  };
  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = e => {
    const upadetdProduct = {
      title: product.title,
      price: product.price
    };
    e.preventDefault();
    axios
      .put(baseURL, upadetdProduct, config)
      .then(() => {
        console.log("Product upadetd successfully!");
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
        <h3>Edit Product</h3>
        <div className="form-wrrap">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleInputChange}
              placeholder="Enter Title"
            />
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              placeholder="Enter Price"
            />
            <input type="submit" value="Save Product" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
