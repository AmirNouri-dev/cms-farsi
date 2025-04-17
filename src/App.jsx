import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Comments from "./Pages/Comments/Comments";
import Users from "./Pages/Users/Users";
import Orders from "./Pages/Orders/Orders";
import Offs from "./Pages/Offs/Offs";
import Statistics from "./Pages/Statistics/Statistics";

function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/offs" element={<Offs />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        {/*route */}
      </div>
    </>
  );
}

export default App;
