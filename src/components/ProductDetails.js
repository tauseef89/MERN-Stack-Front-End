import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

import axios from "axios";

const ProductDetails = () => {
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
  return (
    <>
      <Header />
      <main>
        <div className="info-wrrap">
          <h4>{id}</h4>
          <h4>{product.title}</h4>
          <h5>Price: {product.price}</h5>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
