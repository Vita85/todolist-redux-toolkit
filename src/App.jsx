import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./components/TodoComponent";
import { addTodos, editTodos } from "./redux/todoSlice";
import { BsPlusCircle } from "react-icons/bs";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text === "") {
      return;
    }

    dispatch(
      addTodos({
        id: Math.floor(Math.random() * 1000),
        text,
        status: "incomplete",
      })
    );
    setText("");
  };

  const handleEdit = (id) => {
    const existingTodo = todos.find((todo) => todo.id === id);
    if (existingTodo) {
      setText(existingTodo.text);
      dispatch(
        editTodos({
          id,
          text: existingTodo.text,
        })
      );
    }
  };

  return (
    <div className="app">
      <div className="content">
        <div className="header">
          <span className="title">Todo List</span>
        </div>
        <div className="add">
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button onClick={handleAdd}>
            <BsPlusCircle />
            <span>Add todo</span>
          </button>
        </div>

        <div className="main">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} handleEdit={handleEdit} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
