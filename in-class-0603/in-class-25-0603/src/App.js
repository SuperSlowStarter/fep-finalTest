import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import FoodList from "./components/FoodList";
import FoodDetail from "./components/FoodDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:categoryId" element={<FoodList />} />
          <Route path="/food/:foodId" element={<FoodDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
