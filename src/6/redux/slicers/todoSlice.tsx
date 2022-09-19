import { createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: "1", title: "Open TypeScript docs", completed: false },
    { id: "2", title: "Find out what types it has", completed: false },
    { id: "3", title: "Learn more about interfaces", completed: false },
    { id: "4", title: "Complete task 6", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now().toString(),
        title: action.payload.title,
        completed: false
      };
      state.push(newTodo)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;