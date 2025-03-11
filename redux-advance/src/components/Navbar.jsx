import React, { useState } from 'react'; 

const Navbar = () => {

    const [ searchTerm, setSearchTerm ] = useState(''); 

    return (
        <div className='w-full h-20 bg-content flex flex-wrap items-center'>
            {/* logo */}
            <div className='text-3xl text-white ml-5 cursor-pointer'>
                RTK 
            </div>
            {/* links */}
            <div className='text-white ml-10 cursor-pointer'>
                Create Post 
            </div>
            <div className='text-white ml-10 cursor-pointer'>
                All Post
            </div>
            <input 
                type="text"
                className='w-200 h-10 bg-white ml-10 pl-black rounded border-2 px-5'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default Navbar;