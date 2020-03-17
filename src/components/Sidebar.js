import React from "react";
import { Link, useHistory } from "react-router-dom";

const Sidebar = () => {
  let history = useHistory();
  const logOut = () => {
    console.log("you have logedout successfully!");
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div className="side-bar">
      <h1>React Shop</h1>
      <ul className="side-menu">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/add-product">Add Product</Link>
        </li>
        <li>
          <button onClick={logOut}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
