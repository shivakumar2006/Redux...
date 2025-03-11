import React from "react"; 
import { useDispatch } from "react-redux";
import { addToDo, updateToDo } from "../features/todo/todo.slice";

const AddTodo = ({ editId, setEditId, input, setInput }) => {

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()

        if(editId) {
            // if in the edit mode, update the todo ...
            dispatch(updateToDo({id: editId, updates: { text: input}}))
            setEditId(null); //Reset edit data 
        } else {
            // otherwise add a new todo 
            dispatch(addToDo(input));
        }
        setInput('') // reset input field 
    }

    return (
        <div className="w-screen h-10">
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center align-center">
            <input 
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-5 transition-colors duration-200 ease-in-out"
                placeholder="Enter your task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button 
                type="submit"
                className="w-20 text-white bg-indigo-500 border-0 py-2 px-6focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
            >
                {editId ? "Update" : "Add ToDo"} {/* Button changes dynamically */}
            </button>
        </form>
        </div>
    )
}

export default AddTodo;