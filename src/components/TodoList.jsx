import React from "react";
import Todo from "./Todo";

const TodoList = ({ basicTodo, setTodos, headTitle }) => {
  console.log(basicTodo);
  return (
    <div style={{ margin: "1rem" }}>
      <h2>{headTitle}</h2>
      {basicTodo.map((basicItem) => (
        <Todo key={basicItem.id} todo={basicItem} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
