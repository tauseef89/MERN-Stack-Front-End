import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import axios from "axios";

const Products = () => {
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

  return (
    <>
      <Header />
      <main>
        <ul className="products">
          {products.map(product => {
            return (
              <li key={product._id}>
                <h4>{product.title}</h4>
                <h5>Price: {product.price}</h5>
                <Link to={`/product-details/${product._id}`}>View Details</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Products;
