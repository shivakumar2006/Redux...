import React, { useState } from "react";
import './App.css'
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {

  const [ editId, setEditId ] = useState(null);
  const [ input, setInput ] = useState("");

  return (
  <>
    <AddTodo editId={editId} setEditId={setEditId} input={input} setInput={setInput} />
    <Todo setEditId={setEditId} setInput={setInput} />
  </>
  )
}

export default App
