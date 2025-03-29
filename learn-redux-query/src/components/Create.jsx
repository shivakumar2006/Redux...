import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddStudentsMutation, useGetStudentsQuery } from '../features/studentSlice';

const Create = () => {

    const [ students, setStudents ] = useState({});
    const [ addStudents ] = useAddStudentsMutation(); 
    const Navigate = useNavigate();
    // const { refetch } = useGetStudentsQuery();

    const handleChange = (e) => {
        setStudents((prev) => ({ ...prev, [e.target.name] : e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            await addStudents(students);
            // refetch();
            alert("Student added successfully");
        } catch ( error ) {
            console.error("Failed to add student", error);
        }
        
        Navigate("/read");
    }

  return (
    <div className='w-screen h-screen bg-primary py-10'>
    <div className='flex justify-center items-center'>
        Name 
    </div>
    <input 
        type='text'
        name="studentName"
        className='w-150 h-10 border-black border-1 flex justify-center items-center ml-106 px-5 rounded bg-white hover:bg-black/10'
        placeholder='Enter name...'
        onChange={handleChange}
    />

    <div className='flex justify-center items-center mt-10'>
        E-mail 
    </div>
    <input 
        type='text'
        name="studentEmail"
        className='w-150 h-10 border-black border-1 flex justify-center items-center ml-106 px-5 rounded bg-white hover:bg-black/10'
        placeholder='Enter e-mail...'
        onChange={handleChange}
    />

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

export default Create;