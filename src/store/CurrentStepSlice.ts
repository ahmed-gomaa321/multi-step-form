import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentStep: 0
}
const currentStepSlice = createSlice({
    name: 'currentStep',
    initialState,
    reducers: {

        increment(state) {
            state.currentStep += 1
        },
        decrement(state) {
            state.currentStep -= 1
        }
    }
})

// export const step = (state) => state
export const { increment, decrement } = currentStepSlice.actions;
export default currentStepSlice.reducer
