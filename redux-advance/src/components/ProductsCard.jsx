import React from 'react'; 
import car  from "../images/car.jpg";

const ProductsCards = () => {
    return (
        <div className='w-screen h-screen flex flex-wrap justify-between text-black'>
            <div className='w-100 h-102 my-5 mx-5 rounded-2xl bg-gray-200 overflow-hidden'>
                <img 
                    src={car}
                    className='w-100 h-55 rounded-t-2xl bg-gray-500 object-cover cursor-pointer transform transition-transform duration-300 hover:scale-105'
                />
                <p className='my-2 mx-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ut facilis tempora distinctio ducimus vitae eveniet. Accusantium vel molestias fugit doloribus possimus, nobis sit, nulla repellendus voluptate incidunt quaerat id.
                </p>
                <button className='w-30 h-10 mx-4 mb-2 bg-blue-500 rounded text-white hover:bg-blue-700 cursor-pointer shadow-xl hover:shadow-2xl'>
                    Click
                </button>
            </div>
        </div>
    )
}

export default ProductsCards;