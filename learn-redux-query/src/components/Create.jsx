import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAddStudentsMutation, useGetStudentQuery, useUpdateStudentMutation } from '../features/studentSlice';

const Create = () => {

    const [ students, setStudents ] = useState({});
    const [ addStudents ] = useAddStudentsMutation(); 
    const [ editMode, setEditMode ] = useState();
    const Navigate = useNavigate();
    const {id} = useParams();
    // const { refetch } = useGetStudentsQuery();
    const { data } = useGetStudentQuery(id);
    const [ updateStudent ] = useUpdateStudentMutation();

    const handleChange = (e) => {
        setStudents((prev) => ({ ...prev, [e.target.name] : e.target.value}));
    }

    useEffect(() => {
        if(id && data) {
            setEditMode(true);
            setStudents({ ...data }); 
        } else {
            setEditMode(false )
        }
    }, [id, data])

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            if(editMode) {
                await updateStudent(students);
            } else {
                await addStudents(students);
            }
            // refetch();
            alert("Student added successfully");
        } catch ( error ) {
            console.error("Failed to add student", error);
        }
        
        Navigate("/read");
    }

    console.log("useParams data : ", data);

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
        value={students?.studentName || ""}
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
        value={students?.studentEmail || ""}
    />

    <div className='flex justify-center items-center mt-8'>
        <button 
            className='w-20 h-10 bg-blue-700 border-0 text-white rounded hover:bg-blue-600 cursor-pointer'
            onClick={handleSubmit}
        > 
            {editMode ? "Update" : "Submit"}
        </button>
    </div>
</div>
  )
}

export default Create;