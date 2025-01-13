import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface WishlistState {
    productIDs: string[],
}

const initialState: WishlistState = {
    productIDs: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<string>) => {
            if (!state.productIDs.includes(action.payload)) {
                state.productIDs.push(action.payload);
            }
        },
        removeFromWishlist: (state, action: PayloadAction<string>) => {
            state.productIDs = state.productIDs.filter(id => id !== action.payload);
        }
    },
});

export default wishlistSlice.reducer;