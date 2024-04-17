import React from "react";
import { Link } from "react-router-dom";
import MyRouter from "./components/router/MyRouter";

function App() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <h2> Lost Creek Cattle Company</h2>
      <MyRouter />
    </div>
  );
}

export default App;
