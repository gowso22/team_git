import React, { useState } from "react";

function ToDoList(){
  const[todos, setTodos] = useState([]);
  const[newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return(
    <div>
      <h1>To-Do-List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="submit">Add my Works</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;