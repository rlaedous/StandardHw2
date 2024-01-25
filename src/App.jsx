import "./App.css";
import TodoList from "./components/TodoList";
import InputArea from "./components/InputArea";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "스탠다드과제2",
      contents: "연습",
      isDone: false,
    },
  ]);
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);
  console.log(todos);
  console.log(workingTodos);
  console.log(doneTodos);
  // console.log(todos);
  // const submitTodo = (newTodos) => {
  //   // return setTodos([newTodos, ...todos]);
  //   return setTodos((prevTodos) => [newTodos, ...prevTodos]);
  // };

  // const deleteTodo = (id) => {
  //   console.log(id);
  //   return setTodos((prevTodos) => prevTodos.filter((x) => x.id !== id));
  // };
  return (
    <>
      <InputArea setTodos={setTodos} />
      {/* <InputArea submitTodo={submitTodo} /> */}
      {/* <TodoList todos={todos} deleteTodo={deleteTodo} /> */}
      {/* <TodoList /> */}
      <TodoList
        headTitle="Working"
        // stateTodo={workingTodos}
        basicTodo={workingTodos}
        setTodos={setTodos}
      />
      <TodoList
        headTitle="Done"
        // stateTodo={doneTodos}
        basicTodo={doneTodos}
        setTodos={setTodos}
      />

      <Footer />
    </>
  );
};

export default App;
