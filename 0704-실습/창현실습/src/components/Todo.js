import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "../redux/TodoSlice";


const Todo = () => {
    const [inputText, setInputText] = useState("");

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.TodoSlice);


    const handleAddTodo = (text) => {
        dispatch(
                addTodo({
                id : Date.now(),
                text,
                completed : false,
            })
        )
        setInputText("");
    }

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    }

    return(
        <>
            <h1>할 일 목록</h1>
            <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
            <button 
                onClick={()=> handleAddTodo(inputText)}
            >추가</button>
            <ul>
                {todos.map((todo) => (
                    <li 
                        key={todo.id}
                        onClick={() => handleToggleTodo(todo.id)}
                        style={{
                                    textDecoration : todo.completed ? "line-through" : "none",
                                }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </>
    )

}

export default Todo;