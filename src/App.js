import React from "react";
import MyRouter from './router/index.js';
import NavBar from "./components/Navbar.js";


function App() {
  return (
    <div>
      <NavBar />
      <MyRouter />
    </div>
  );
}

export default App;
