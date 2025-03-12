import React, { useState } from 'react'; 
import { useDispatch } from "react-redux";
import { createUser } from '../features/slices/slice';
import { useNavigate } from 'react-router-dom';

const Content = () => {

    const [ users, setUsers ] = useState();

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const getUserData = (e) => {
       setUsers(prevUsers => ({
        ...prevUsers,
            [e.target.name] : e.target.value
       }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // check if al the fields are fill
        if (!(users?.name || users?.email || users?.age || users?.gender)) {
            alert("Please fill out all the fields before submitting...");
            return;
        }

        dispatch(createUser(users))
        console.log("users...", users);
        Navigate("/read");
    }

    return (
        <div className='w-screen h-screen bg-primary py-10'>
            <div className='flex justify-center items-center'>
                Name 
            </div>
            <input 
                type='text'
                name="name"
                className='w-150 h-10 border-white flex justify-center items-center ml-106 px-5 rounded bg-white'
                placeholder='Enter name...'
                onChange={getUserData}
            />

            <div className='flex justify-center items-center mt-10'>
                E-mail 
            </div>
            <input 
                type='text'
                name="email"
                className='w-150 h-10 border-white flex justify-center items-center ml-106 px-5 rounded bg-white'
                placeholder='Enter e-mail...'
                onChange={getUserData}
            />

            <div className='flex justify-center items-center mt-10'>
                Age 
            </div>
            <input 
                type='text'
                name="age"
                className='w-150 h-10 border-white flex justify-center items-center ml-106 px-5 rounded bg-white'
                placeholder='Enter age...'
                onChange={getUserData}
            />

            <div className='flex justify-center items-center mt-5'>
                <input
                    className='cursor-pointer'
                    type='radio' 
                    name="gender"
                    value="Male"
                    onChange={getUserData}
                />
                <label className="ml-4">Male</label>

                <input
                    className='ml-5 cursor-pointer' 
                    type='radio' 
                    name='gender'
                    value="Female"
                    onChange={getUserData}
                />
                <label className="ml-4">Female</label>
            </div>
            <div className='flex justify-center items-center mt-8'>
                <button 
                    className='w-20 h-10 bg-blue-700 border-0 text-white rounded hover:bg-blue-600 cursor-pointer'
                    onClick={handleSubmit}
                > 
                    Submit 
                </button>
            </div>
        </div>
    )
}

export default Content;