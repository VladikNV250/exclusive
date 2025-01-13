import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartState {
    productIDs: string[],
}

const initialState: CartState = {
    productIDs: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<string>) => {
            if (!state.productIDs.includes(action.payload)) {
                state.productIDs.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.productIDs = state.productIDs.filter(id => id !== action.payload);
        },
        cleanCart: (state) => {
            state.productIDs = [];
        }
    }
})

export default cartSlice.reducer;