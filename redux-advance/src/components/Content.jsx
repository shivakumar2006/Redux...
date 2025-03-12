import React, { useState } from 'react'; 
import { useDispatch } from "react-redux";

const Content = () => {

    // const [ selectGender, setSelectGender ] = useState(null);

    // const handleGenderSelect = (gender) => {
    //     setSelectGender(prevGender => (prevGender === gender ? null : gender));
    // } 

    const [ users, setUsers ] = useState();

    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({...users, [e.target.name] : e.target.value})

        console.log(users);
    }

    const handleSubmit = () => {
        dispatch()
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
                />
                <label className="ml-4">Male</label>

                <input
                    className='ml-5 cursor-pointer' 
                    type='radio' 
                    name='gender'
                    value="Female"
                />
                <label className="ml-4">Female</label>
            </div>
            <div className='flex justify-center items-center mt-8'>
                <button 
                    className='w-20 h-10 bg-blue-700 border-0 text-white rounded hover:bg-blue-600 cursor-pointer'
                    onSubmit={handleSubmit}
                > 
                    Submit 
                </button>
            </div>
        </div>
    )
}

export default Content;