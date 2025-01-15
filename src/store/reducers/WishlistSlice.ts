import { IProduct } from "@/models/IProduct";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface WishlistState {
    products: IProduct[],
}

const initialState: WishlistState = {
    products: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<IProduct>) => {
            if (!state.products.includes(action.payload)) {
                state.products.push(action.payload);
                localStorage.setItem("wishlist", JSON.stringify(state.products))
            }
        },
        removeFromWishlist: (state, action: PayloadAction<IProduct["id"]>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            localStorage.setItem("wishlist", JSON.stringify(state.products));
        },
        getWishlistFromLocalStorage: (state) => {
            const wishlist: string | null = localStorage.getItem("wishlist");
            if (wishlist) state.products = JSON.parse(wishlist);
        }
    },
});

export default wishlistSlice.reducer;