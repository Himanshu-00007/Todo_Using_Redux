import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/slice"
export const store = configureStore({
  reducer: todoReducer,
})