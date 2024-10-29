import { configureStore } from "@reduxjs/toolkit";
import currentStepReducer from "@/store/CurrentStepSlice"
export const store = configureStore({
    reducer: currentStepReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

