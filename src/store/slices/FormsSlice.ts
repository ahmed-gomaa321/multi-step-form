import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IForms {
    name: string;
    email: string;
    phone: string;
    isFilled?: boolean
}

const initialState: IForms = {
    name: '',
    email: '',
    phone: '',
    isFilled: false,
}

const formsSlice = createSlice({
    name: "forms",
    initialState,
    reducers: {
        updateAll(state, action: PayloadAction<IForms>) {
            state = { ...action.payload, isFilled: true };
            console.log(state);
        },
    }
})

export const { updateAll } = formsSlice.actions;
export default formsSlice.reducer
