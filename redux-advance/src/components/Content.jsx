import React from 'react'; 

const Content = () => {
    return (
        <div className='w-screen h-screen bg-primary py-10'>
            <div className='flex justify-center items-center'>
                Name 
            </div>
            <input 
                type='text'
                className='w-150 h-10 border-white flex justify-center items-center ml-106 px-5 rounded bg-white'
                placeholder='Enter Name...'
            />

            <div className='flex justify-center items-center mt-10'>
                E-mail 
            </div>
            <input 
                type='text'
                className='w-150 h-10 border-white flex justify-center items-center ml-106 px-5 rounded bg-white'
                placeholder='Enter E-mail...'
            />

            <div className='flex justify-center items-center mt-10'>
                Age 
            </div>
            <input 
                type='text'
                className='w-150 h-10 border-white flex justify-center items-center ml-106 px-5 rounded bg-white'
                placeholder='Enter Age...'
            />

            <select>Male</select>
        </div>
    )
}

export default Content;