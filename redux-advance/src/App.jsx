import React from 'react'; 
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Content />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;