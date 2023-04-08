import React from "react";
import todoData from "@/data/todos.json";
import style from "./ToDoApp.module.css"

function ToDoApp() {
  const [todos, setTodos] = React.useState(todoData);
  console.log(todos);
  return (
    <div className= {style["todo-container-wrapper"]}>
      {todos.map((todo) => (
        <div key={todo.id} className={style["todo-item"]}>
          <h1
            style={
              todo.isCompleted
                ? { textDecoration: "line-through", color: "gray" }
                : { color: "blue" }
            }
          >
            {todo.title}
          </h1>
          <p>{todo.description}</p>
          <button type="button">Complete</button>
        </div>
      ))}
    </div>
  );
}

export default ToDoApp;
