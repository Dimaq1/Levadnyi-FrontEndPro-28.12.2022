import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: []
}

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload
      state.tasks.push(newTask)
    },
    deleteTask: (state, action) => {
      const idDeletedTask = action.payload
      state.tasks = state.tasks.filter(task => task.id !== idDeletedTask);
    }
  }
})


export const { addTask, deleteTask } = todoListSlice.actions
export default todoListSlice.reducer