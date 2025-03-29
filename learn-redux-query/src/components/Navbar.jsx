import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full h-18 bg-blue-500 flex flex-row justify-evenly items-center shadow-xl'>
           <h1 className='w-40 h-18 text-white text-4xl flex justify-center items-center'>Navbar</h1>
           <NavLink 
                to="/" 
                className={({ isActive }) => 
                    `text-white w-20 h-6 flex items-center justify-center hover:bg-black/10 ${isActive ? 'bg-black/10' : ''}`
            }
            >
                Home
            </NavLink> 
            <NavLink 
                to="/read" 
                className={({ isActive }) => 
                    `text-white w-20 h-6 flex items-center justify-center hover:bg-black/10 ${isActive ? 'bg-black/10' : ''}`
            }
            >
                Read
            </NavLink>
            <NavLink 
               to="/create" 
               className={({ isActive }) => 
                   `text-white w-20 h-6 flex items-center justify-center hover:bg-black/10 ${isActive ? 'bg-black/10' : ''}`
           }
            >
                create
            </NavLink>
        </div>
    )
}

export default Navbar;