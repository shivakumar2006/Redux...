import React from 'react'; 
import "./App.css";
import  Navbar  from "./components/Navbar";
import ProductsCards from './components/ProductsCard';
import Cart from './components/Cart';
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProductsCards />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}

export default App;