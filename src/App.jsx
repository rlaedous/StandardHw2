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
  return (
    <>
      <InputArea setTodos={setTodos} />
      <TodoList
        headTitle="Working"
        basicTodo={workingTodos}
        setTodos={setTodos}
      />
      <TodoList headTitle="Done" basicTodo={doneTodos} setTodos={setTodos} />
      <Footer />
    </>
  );
};

export default App;
