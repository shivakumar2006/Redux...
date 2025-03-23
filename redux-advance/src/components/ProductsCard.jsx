import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';

const ProductsCards = () => {

    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return (
        <div className='w-screen h-screen mt-25 flex flex-wrap justify-between text-black'>
            {items?.map((item) => (
            <div key={item.id} className='w-100 h-100 my-5 mx-5 rounded-2xl bg-gray-200 overflow-hidden shadow-xl'>
                <img 
                    src={item.img}
                    className='w-100 h-55 rounded-t-2xl bg-gray-500 object-contain cursor-pointer transform transition-transform duration-300 hover:scale-105'
                />
                <h1 className='my-2 mx-4 text-2xl '>{item.title}</h1>
                <p className='my-3 mx-4'>
                    Rs.{item.price}/-
                </p>
                <button 
                    className='w-30 h-10 mx-4 my-3 bg-blue-500 rounded text-white hover:bg-blue-700 cursor-pointer shadow-xl hover:shadow-2xl'
                    onClick={() => dispatch(addToCart(item))}
                >
                    Add to cart
                </button>
            </div>
            ))}
        </div>
    )
}

export default ProductsCards;