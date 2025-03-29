import React from 'react';
import Read from './components/Read';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import { Routes, Route } from 'react-router-dom';
import "./App.css"; 

const App  = () => {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/read' element={<Read />} />
                <Route path='/create' element={<Create />} />
            </Routes>
        </div>
    )
}

export default App;