import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Create a React App",
      status: "incomplete",
    },
    {
      id: 2,
      text: "Create a Redux App",
      status: "incomplete",
    },
    {
      id: 3,
      text: "Create a Redux Toolkit App",
      status: "incomplete",
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      // const newTodo = action.payload;
      // state.todos.push(newTodo);
      state.todos.push(action.payload);
    },

    editTodos: (state, action) => {
      const {id, text} = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
      }
    },

    removeTodos: (state, action) => {
      // const id = action.payload;
      // state.todos = state.todos.filter((todo) => todo.id !== id);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    changeTodoStatus: (state, action) => {
      // const id = action.payload;
      // const existingTodo = state.todos.find((todo) => todo.id === id);
      const existingTodo = state.todos.find((todo) => todo.id === action.payload);
      if (existingTodo) {
        existingTodo.status = existingTodo.status === "incomplete" ? "complete" : "incomplete";
      } 
    },
  },
});

export const {addTodos, editTodos, removeTodos, changeTodoStatus} = todoSlice.actions;
export default todoSlice.reducer;