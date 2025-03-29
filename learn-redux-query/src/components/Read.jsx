import React from 'react'; 
import { BarLoader } from 'react-spinners';
import { NavLink } from 'react-router-dom';
import { useGetStudentsQuery, useDeleteStudentsMutation } from '../features/studentSlice';

const Read = () => {

    const { data: students, isLoading, isSuccess, isError } = useGetStudentsQuery();
    const [ deleteStudents ] = useDeleteStudentsMutation();

    if(isLoading) {
        return <div className='w-screen h-screen flex justify-center items-center'><BarLoader /></div>
    }

    if(isError) {
        return <div>something went wrong...</div>
    }

    console.log("data", students);

    return (
        <div className='w-screen h-screen'>
            <h1 className="my-5 text-3xl flex justify-center items-center">Read</h1>
            <div className='flex flex-row flex-wrap justify-evenly items-center'>
            {isSuccess && 
                students?.map((student) => (
                <div key={student.id} className='w-100 h-50 mx-5 my-5 bg-gray-200 rounded-t-2xl flex flex-col justify-evenly items-center hover:bg-gray-100 shadow-xl'>
                    <div className="my-6 flex flex-col justify-center items-center gap-5">
                        <h1 className='text-4xl'>{student?.studentName}</h1> 
                        <h1 className='text-gray-500 text-3xl'>{student?.studentEmail}</h1>
                        <div className='w-full text-blue-400 flex flex-row justify-evenly items-center'>
                            <button 
                                className='w-20 h-10 bg-blue-500 text-white rounded shadow-xl hover:bg-blue-600'
                                onClick={() => deleteStudents(student?.id)}
                            >
                                Delete
                            </button>
                            <button 
                                className='w-20 h-10 bg-red-500 text-white rounded shadow-xl hover:bg-red-600'
                                
                            >
                                <NavLink to={`/edit/${student?.id}`}>Update</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Read;