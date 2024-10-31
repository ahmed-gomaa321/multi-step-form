import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IForms {
    name: string;
    email: string;
    phone: string;
    isFilled: boolean
}

const initialState: IForms[] = [{
    name: '',
    email: '',
    phone: '',
    isFilled:false,
}]

const formsSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
        updateAll(state, action: PayloadAction<IForms>) {
            state[0] = { ...action.payload ,isFilled :true};
            console.log(state[0]);
        },
    }
})

export const { updateAll } = formsSlice.actions;
export default formsSlice.reducer
