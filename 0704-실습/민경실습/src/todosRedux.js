import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "./redux/todosSlice";

export default function TodosRedux() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );
    document.getElementById("todoInput").value = "";
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" id="todoInput" />
      <button
        onClick={() =>
          handleAddTodo(document.getElementById("todoInput").value)
        }
      >
        추가하기
      </button>
    </div>
  );
}
