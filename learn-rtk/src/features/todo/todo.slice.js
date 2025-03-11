import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid always generate unique id everytime. 

const initialState = {
    todos: [{
            id: 1,
            text: "Shiva Kumar",
        }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateToDo: (state, action) => {
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload.id ? { ...todo, ...action.payload.updates } : todo 
            )
        }
    }
})

export const {addToDo, removeToDo, updateToDo} = todoSlice.actions;

export default todoSlice.reducer; 