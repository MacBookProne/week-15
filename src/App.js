import React from "react";
import MyRouter from './router/index.js';
import NavBar from "./components/Navbar.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <div>
      <NavBar />
      <MyRouter />
      <Footer />
    </div>
  );
}

export default App;
