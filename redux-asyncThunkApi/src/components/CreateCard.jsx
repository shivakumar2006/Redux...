import React from 'react'; 
import { useSelector } from "react-redux";

const CreateCard = ({ id, setShowPopup }) => {
    const allUsers = useSelector((state) => state.app.users);

    // Ensure we only proceed if id is set
    if (!id) return null;

    const singleUser = allUsers.find((user) => user.id === id);

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-150 px-33">
                <h2 className="flex justify-center items-center text-xl font-bold">User Details</h2>
                {singleUser ? (
                    <>
                        <p className="flex justify-center items-center text-lg">Name: {singleUser.name}</p>
                        <p className="flex justify-center items-center text-lg">Email: {singleUser.email}</p>
                        <p className="flex justify-center items-center text-lg">Gender: {singleUser.gender}</p>
                        <p className='flex justify-center items-center text-lg'>Age: {singleUser.age}</p>
                    </>
                ) : (
                    <p className="text-red-500">User not found</p>
                )}
                <button 
                    className="mt-4 px-10 py-2 mx-27 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => setShowPopup(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CreateCard;
