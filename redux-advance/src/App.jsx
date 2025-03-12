import React from 'react'; 
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Home from "./components/Home";
import Read from "./components/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/read" element={<Read />} />
                <Route path="/home" element={<Content />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;