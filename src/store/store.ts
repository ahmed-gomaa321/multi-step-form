import { configureStore } from "@reduxjs/toolkit";
import formsSliceReducer from "@/store/slices/FormsSlice";
import planStateReducer from "@/store/slices/PlanStateSlice";

export const store = configureStore({
    reducer: {
        forms: formsSliceReducer,
        planState : planStateReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
