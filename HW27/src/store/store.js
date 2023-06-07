import { configureStore } from "@reduxjs/toolkit"
import weatherReducer from "../store/slices/weatherSlice.js"

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  }
})

export default store