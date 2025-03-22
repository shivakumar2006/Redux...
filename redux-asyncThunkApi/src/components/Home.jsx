import React from "react"; 
import Redux from "../assets/redux.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate("/home")
    }

    return (
        <>
            <div className="mt-50 flex justify-center items-center">
                <img
                    className="cursor-pointer"
                    src={Redux} 
                    alt="redux" 
                    onClick={handleClick}
                />
            </div>
            <div>
                <h4 className="mt-10 flex justify-center items-center">
                    Click on this&nbsp;
                    <Link to="https://redux-toolkit.js.org/" className="text-indigo-800 underline">link</Link>
                    &nbsp;to go to the main website. 
                </h4>
            </div>
            <div className="mt-20 flex justify-center items-center">
                <button className="w-30 h-10 bg-blue-700 text-white rounded hover:bg-blue-500">
                    <Link to="/home">Create User</Link>
                </button>
            </div>
        </>
    )
}

export default Home;