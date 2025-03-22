import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from '../features/slices/slice';
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const { id } = useParams();
    const Navigate = useNavigate();
    const { users = [], loading } = useSelector((state) => state.app);
    const [ updatedData, setUpdatedData ] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        if(id) {
            const singleUser = users.find((user) => user?.id === id);
            if (singleUser) {setUpdatedData(singleUser)};
        }
    }, [id, users])

    const handleChange = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name] : e.target.value});
    }

    const handleClick = () => {
        dispatch(updateUser(updatedData))
        Navigate("/read");
    }

    if(loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    console.log("userData : ", updatedData);

    return (
        <div className='w-screen h-screen bg-primary py-10'>
            <div className='flex justify-center items-center'>
                Name 
            </div>
            <input 
                type='text'
                name="name"
                value={updatedData?.name || ""}
                onChange={handleChange}
                className='w-150 h-10 border-white flex justify-center items-center ml-106 px-5 rounded bg-white'
                placeholder='Enter name...'
            />

            <div className='flex justify-center items-center mt-10'>
                E-mail 
            </div>
            <input 
                type='text'
                name="email"
                value={updatedData?.email || ""}
                onChange={handleChange}
                className='w-150 h-10 border-white flex justify-center items-center ml-106 px-5 rounded bg-white'
                placeholder='Enter e-mail...'
            />

            <div className='flex justify-center items-center mt-10'>
                Age 
            </div>
            <input 
                type='text'
                name="age"
                value={updatedData?.age || ""}
                onChange={handleChange}
                className='w-150 h-10 border-white flex justify-center items-center ml-106 px-5 rounded bg-white'
                placeholder='Enter age...'
            />

            <div className='flex justify-center items-center mt-5'>
                <input
                    className='cursor-pointer'
                    type='radio' 
                    name="gender"
                    value="Male"
                    checked={updatedData?.gender === "Male"}
                    onChange={handleChange}
                />
                <label className="ml-4">Male</label>

                <input
                    className='ml-5 cursor-pointer' 
                    type='radio' 
                    name='gender'
                    value="Female"
                    checked={updatedData?.gender === "Female"}
                    onChange={handleChange}
                />
                <label className="ml-4">Female</label>
            </div>
            <div className='flex justify-center items-center mt-8'>
                <button 
                    className='w-20 h-10 bg-blue-700 border-0 text-white rounded hover:bg-blue-600 cursor-pointer'
                    onClick={handleClick}
                > 
                    Update
                </button>
            </div>
        </div>
    )
}

export default Update;