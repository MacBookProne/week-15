import { Routes, Route } from "react-router-dom";

// Imports
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cattle from "../pages/Cattle";
import CattleCreate from "../pages/CattleCreate";
import CattleEdit from "../pages/CattleEdit";

// Define routing for the app.
function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/cattle" element={<Cattle />} />
      <Route path="/cattle/create" element={<CattleCreate />} />
      <Route path="/cattle/:id/edit" element={<CattleEdit />} />
      </Routes>
  );
}

export default MyRouter;
