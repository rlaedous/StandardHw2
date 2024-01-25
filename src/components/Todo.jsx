import React from "react";

const Todo = ({ todo, setTodos }) => {
  // const [todos, setTodos] = useState([]);
  const { id, title, contents, isDone } = todo;

  const deleteTodo = (id) => {
    console.log(id);
    return setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // const toggleTodo = (id) => {
  //   return setTodos((prevTodos) => {
  //     prevTodos.map((todoItem) => {
  //       if (todoItem.id === id)
  //         return {
  //           ...todoItem,
  //           isDone: !todoItem.isDone,
  //         };
  //       return todoItem;
  //     });
  //   });
  // };

  // const toggleTodo = (id) => {
  //   const arr = [];
  //   arr.push(todo);
  //   const temp_todo = arr.map((todoItem) => {
  //     if (todoItem.id === id) {
  //       const todo = { ...todoItem, isDone: !todoItem.isDone };
  //       return todo;
  //     }
  //   });
  //   setTodos(temp_todo);
  // };

  const toggleTodo = (id) => {
    return setTodos((prevTodos) =>
      prevTodos.map((todoItem) => {
        if (todoItem.id === id)
          return {
            ...todoItem,
            isDone: !todoItem.isDone,
          };
        return todoItem;
      })
    );
  };
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h3>{title}</h3>
      <div>{contents}</div>
      <div>
        <button onClick={() => deleteTodo(id)}>삭제</button>
        <button onClick={() => toggleTodo(id)}>
          {isDone === false ? "완료" : "취소"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
