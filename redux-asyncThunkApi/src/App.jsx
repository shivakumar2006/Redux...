import React from 'react'; 
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Home from "./components/Home";
import Read from "./components/Read";
import Update from './components/Update';
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
                <Route path="/edit/:id" element={<Update />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;