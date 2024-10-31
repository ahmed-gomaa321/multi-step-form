import { configureStore } from "@reduxjs/toolkit";
import formsSliceReducer from "@/store/slices/FormsSlice";

export const store = configureStore({
    reducer: {
        forms: formsSliceReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
