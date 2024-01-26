import React, { useState } from "react";
const InputArea = ({ setTodos }) => {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const titleChangeHandler = (e) => {
    setTitle(e.target.value, "");
  };
  const contentsChangeHandler = (e) => {
    setContents(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    submitTodo({
      id: Date.now(),
      title,
      contents,
      isDone: false,
    });
    setTitle("");
    setContents("");
  };
  const submitTodo = (newTodos) => {
    return setTodos((prevTodos) => [...prevTodos, newTodos]);
  };

  return (
    <form onSubmit={submitHandler}>
      제목
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title || ""}
        onChange={titleChangeHandler}
      ></input>
      내용
      <input
        type="text"
        placeholder="내용을 입력해주세요"
        value={contents || ""}
        onChange={contentsChangeHandler}
      ></input>
      <button type="submit">추가</button>
    </form>
  );
};

export default InputArea;
