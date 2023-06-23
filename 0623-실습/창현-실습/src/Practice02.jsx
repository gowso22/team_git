import React, { useState } from "react";



function Practice02(){
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([
     {
         id : 5156165412364,
         text : "첫 번째 todo"
     },
    ]);
 
    const onTextChange = (e) => {
     setTodoText(e.target.value);
    }
 
    const onAddTodo = (e) => {
     e.preventDefault();
     // 배열 추가  : spread 연산자를 사용하거나, concat 함수를 사용
     setTodos(todos.concat(
         {
         id : new Date(),
         text : todoText
         }
     ))
     
     
     setTodoText("");
    }
 
    console.log(todos);
     return(
         <div>
            <h1>실습2</h1>
             <form onSubmit={onAddTodo}>
                 <input type="text" 
                         placeholder="할 일을 추가해주세요"
                         value={todoText}
                         onChange={onTextChange}></input>
                 <input type="submit" value="추가"></input>
             </form>
             <ul>
                 {todos.map((item) => (
                     <li key = {item.id}>{item.text}</li>
                     ))}
             </ul>
         </div>
     );

}

export default Practice02;