import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";

import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Report from "./pages/Report";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Layout>
  );
}

export default App;
