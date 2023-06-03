import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from './slices/todoListSlice'


const store = configureStore({
  reducer: todoListSlice
})

export default store