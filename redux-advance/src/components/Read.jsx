import React, { useEffect } from 'react'; 
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../features/slices/slice';
import { GridLoader } from "react-spinners";

const Read = () => {

    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]); 

    if(loading) {
        return (
        <div className='h-180 flex justify-center items-center'>
            <GridLoader color='indigo' />
        </div>
        )
    }

    if(error) {
        throw new Error("Not fething the data...");
    }

    return (
        <>
            <h1 className='mt-10 text-4xl flex justify-center items-center'>Users list</h1>
            {users && users.map((user) => (
            <div className='w-180 h-50 bg-read mx-90 my-10 py-2 rounded-3xl'>
                <h1 className='text-3xl mt-2 flex justify-center items-center'
                >
                    {user.name}
                </h1>
                <p className='text-gray-600 text-2xl mt-2 flex justify-center items-center'>{user.email}</p>
                <p className='text-gray-600 mt-4 text-2xl flex justify-center items-center '>{user.gender}</p>
                <h2 className='w-80 mt-5 ml-52 text-blue-600 flex justify-evenly items-center'>
                    <Link className='hover:text-blue-500' to="">View</Link>
                    <Link className='hover:text-blue-500' to="">Edit</Link>
                    <Link className='hover:text-blue-500' to="">Delete</Link>
                </h2>
            </div>
            ))}
        </>
    )
}

export default Read;