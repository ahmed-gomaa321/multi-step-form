import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPlanState {
    selectPlan: string | null;
    isFilled: boolean;
}
const initialState: IPlanState = {
    selectPlan: null,
    isFilled: false,
}
const planState = createSlice({
    name: "planState",
    initialState,
    reducers: {
        selectPlan(state, action: PayloadAction<string>) {
            state.selectPlan = action.payload
        }
    }
})

export const { selectPlan } = planState.actions;
export default planState.reducer;