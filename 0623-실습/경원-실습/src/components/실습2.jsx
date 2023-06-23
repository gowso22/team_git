import React from "react";
import { useState } from "react";

function TodoList(props){
  // console.log(props.todos)
  const todos =props.todos
  return(
    <ul>
      {todos.map((item,index) =>(
        <li key={index}>{item.text}</li>
      ))}
    </ul>
  )
}

function Test5(){
  const[inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([
    {
      id:1,
      text: "할일 목록1"
    },
    {
      id:2,
      text: "할일 목록2"
    },
    {
      id:3,
      text: "할일 목록3"
    },
    {
      id:4,
      text: "할일 목록4"
    },
  ])
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  }

  const handleAddTodo = () => {
    if(inputText.trim() != ""){
      const newTodo = {
        id: todos.length+1,
        text:inputText,
      };
      setTodos([...todos,newTodo]);
      setInputText("");
    }
  }
  return(
    <div>

      <input type="text" value={inputText} onChange={handleInputChange}></input>
      <button onClick={handleAddTodo} >입력하기</button>
      <TodoList todos={todos}/>
    </div>
  )
 
}

export default Test5;