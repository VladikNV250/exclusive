import { IProduct } from "@/models/IProduct";
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { editProduct, fetchAllProducts, fetchProductByName } from "./ActionCreators";

interface ProductState {
    products: IProduct[],
    isLoading: boolean,
    error: SerializedError | null,
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: null,
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        updateQuantity: (state, action: PayloadAction<{id: IProduct["id"], quantity: IProduct["quantity"]}>) => {
            const { id, quantity } = action.payload;
            const productIndex = state.products.findIndex(product => product.id === id);
            const product = state.products[productIndex];

            product.quantity = quantity;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.isLoading = false;
                state.products = action.payload;
                state.error = {};
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.products = [];
                state.error = action.payload as SerializedError;
                console.error(action.payload);
            })
            .addCase(editProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editProduct.fulfilled, (state, action: PayloadAction<IProduct>) => {
                state.isLoading = false;
                const index = state.products.findIndex(product => product.id === action.payload.id);
                state.products[index] = action.payload;
                state.error = {};
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.products = [];
                state.error = action.payload as SerializedError;
                console.error(action.payload);
            })
            .addCase(fetchProductByName.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProductByName.fulfilled, (state) => {
                state.isLoading = false;
                state.error = {};
            })
            .addCase(fetchProductByName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as SerializedError;
                console.error(action.payload);
            })
    }
})

export default productSlice.reducer;