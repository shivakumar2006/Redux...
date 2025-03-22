import React from 'react'; 
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='w-full h-20 text-white bg-blue-500 flex flex-row justify-between items-center shadow-2xl'>
            <h1 className='text-3xl ml-5'>Navbar</h1>
            <div className='w-250 h-20 text-white flex flex-row justify-evenly items-center gap-10'>
                <button className='w-40 h-10 bg-black/10 rounded hover:bg-black/30 shadow-lg cursor-pointer'>
                    All Products 
                </button>
                <button className='w-40 h-10 bg-black/10 rounded hover:bg-black/30 shadow-lg cursor-pointer'>
                    Cart
                </button>
            </div>
            <div className='flex flex-end'>
                <div className='relative'>
                    <FaSearch className='absolute top-1/2 left-8 transform -translate-y-1/2 text-gray-200 hover:text-gray-400' />
                    <input
                        type='text'
                        className='w-60 h-10 mx-5 border-white border-1 rounded px-10 bg-black/10 hover:placeholder-gray-300 hover:bg-black/30'
                        placeholder='Search...'
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar;