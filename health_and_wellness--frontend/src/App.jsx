import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="/contact" element={<h1>contact</h1>} />
        <Route path="/register" element={<h1>register</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;