import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../features/slices/slice';
import { deleteUser } from '../features/slices/slice';
import { GridLoader } from "react-spinners";
import { Link } from 'react-router-dom';
import CreateCard from './CreateCard';

const Read = () => {

    const dispatch = useDispatch();
    const [ id, setId ] = useState(null);
    const [ showPopup, setShowPopup ] = useState(false);

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
            { showPopup && <CreateCard id={id} showPopup={showPopup} setShowPopup={setShowPopup} /> }
            <h1 className='mt-10 text-4xl flex justify-center items-center'>Users list</h1>
            {users && users?.map((user) => (
            <div key={user.id} className='w-180 h-50 bg-read mx-90 my-10 py-2 rounded-3xl'>
                <h1 className='text-3xl mt-2 flex justify-center items-center'
                >
                    {user?.name || "No User"}
                </h1>
                <p className='text-gray-600 text-2xl mt-2 flex justify-center items-center'>{user?.email || "No email"}</p>
                <p className='text-gray-600 mt-4 text-2xl flex justify-center items-center '>{user?.gender || "No gender"}</p>
                <div className='w-80 mt-5 ml-52 text-blue-600 flex justify-evenly items-center'>
                    <button 
                        className='w-14 h-8 bg-blue-600 text-white rounded hover:bg-blue-500' 
                        onClick={() => {
                            console.log("Clicked view for user : ", user.id);
                            setId(user.id);
                            setShowPopup(true);
                        }}
                    >
                        View
                    </button>
                    <button 
                        className='w-14 h-8 bg-blue-600 text-white rounded hover:bg-blue-500' 
                    >
                        <Link to={`/edit/${user.id}`}>Edit</Link>
                    </button>
                    <button 
                        className='w-14 h-8 bg-blue-600 text-white rounded hover:bg-blue-500' 
                        onClick={() => dispatch(deleteUser(user.id))}
                    >
                        Delete
                    </button>
                </div>
            </div>
            ))}
        </>
    )
}

export default Read;