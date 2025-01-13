import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProduct } from "@/models/IProduct";

const selectByIdProducts = createSelector(
    (state: RootState) => state.productReducer.products, // get massive of products
    (_, productID: string) => productID, // get massive of product's id
    (products: IProduct[], productID: string) => {
        return products.find(product => product.id === productID)
    }
)

export default selectByIdProducts;