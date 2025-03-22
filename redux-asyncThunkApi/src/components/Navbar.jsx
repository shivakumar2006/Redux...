import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { searchUser } from '../features/slices/slice';

const Navbar = () => {

    const [ searchTerm, setSearchTerm ] = useState('');
    const dispatch = useDispatch(); 
    const allUsers = useSelector((state) => state.app.users);

    useEffect(() => {
        dispatch(searchUser(searchTerm));
    }, [searchTerm])

    return (
        <div className='w-full h-20 bg-content flex flex-wrap items-center'>
            {/* logo */}
            <div className='text-3xl text-white ml-5 cursor-pointer'>
                <Link to="/">RTK</Link> 
            </div>
            {/* links */}
            <div className='text-white ml-10 cursor-pointer'>
                <Link to="/home">Create Post</Link>
            </div>
            <div className='text-white ml-10 cursor-pointer'>
                <Link to="/read">All Post ({allUsers.length})</Link>
            </div>
            <input 
                type="text"
                className='w-200 h-10 bg-white ml-10 pl-black rounded border-2 px-5'
                placeholder='Search...'
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default Navbar;