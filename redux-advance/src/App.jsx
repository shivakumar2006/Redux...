import React from 'react'; 
import "./App.css";
import  Navbar  from "./components/Navbar";
import ProductsCards from './components/ProductsCard';

const App = () => {
    return (
        <div>
            <Navbar />
            <ProductsCards />
        </div>
    )
}

export default App;