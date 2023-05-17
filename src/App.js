import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" Component={<Welcome/>} />
        <Route path="/printshop" Component={<Photos/>} />
        <Route path="/cart" Component={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
