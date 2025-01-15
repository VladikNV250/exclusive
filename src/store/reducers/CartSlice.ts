import { ICart } from "@/models/ICart";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartState {
    products: ICart[],
}

const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICart>) => {
            if (!state.products.includes(action.payload)) {
                state.products.push(action.payload);
                localStorage.setItem("cart", JSON.stringify(state.products))
            }
        },
        removeFromCart: (state, action: PayloadAction<ICart["id"]>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.products))
        },
        cleanCart: (state) => {
            state.products = [];
            localStorage.setItem("cart", JSON.stringify(state.products))
        },
        updateQuantity: (state, action: PayloadAction<{id: ICart["id"], quantity: ICart["quantity"]}>) => {
            const { id, quantity } = action.payload;
            const productIndex = state.products.findIndex(product => product.id === id);
            const product = state.products[productIndex];

            product.quantity = quantity;
            localStorage.setItem("cart", JSON.stringify(state.products))
        },
        getCartFromLocalStorage: (state) => {
            const cart: string | null = localStorage.getItem("cart");
            if (cart) state.products = JSON.parse(cart);
        }
    }
})

export default cartSlice.reducer;