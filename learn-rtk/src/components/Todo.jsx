import React from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { removeToDo } from "../features/todo/todo.slice";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

const Todo = ({ setEditId, setInput }) => {

    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    return (
    <>
        <div className="w-full flex justify-center items-center mt-4">
            Todos
        </div>
        <ul className="list-none">
            {todos.map((todo) => (
                <li className="mt-4 ml-58 w-250 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white"
                    key={todo.id}>
                        {todo.text}
                    <div className="flex space-x-2">
                        <button className="bg-red-500 flex justify-center items-center rounded w-13 h-10 text-white text-2xl hover:bg-indigo-500 cursor-pointer"
                            onClick={() => {
                                setEditId(todo.id) // set edit mode 
                                setInput(todo.text); // Fill inout with current todo text
                            }}
                        >
                            <RxUpdate />
                        </button>
                        <button className="bg-red-500 flex justify-center items-center rounded w-13 h-10 text-white text-3xl hover:bg-indigo-500 cursor-pointer" 
                            onClick={() => dispatch(removeToDo(todo.id))}>
                            <MdDelete />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </>
    )
}

export default Todo;