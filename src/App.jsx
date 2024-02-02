import { useState } from "react";
import "./App.css";

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import SearchBar from "./components/SearchBar";
import SearchR from "./pages/SearchR";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/pessoas/:id" element={<Info/>}/>
            <Route path="/search" element={<SearchR/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
