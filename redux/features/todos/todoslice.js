import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, task: "hello" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const todo = {
        id: nanoid(),
        task: actions.payload,
      };
      state.todos.push(todo);
    },
    removeTodos: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
  },
});

export const { addTodo, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;
