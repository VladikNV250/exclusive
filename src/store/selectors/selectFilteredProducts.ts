import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IProduct } from "@/models/IProduct";

const selectFilteredProducts = createSelector(
    (state: RootState) => state.productReducer.products, 
    (_, tag: string) => tag,
    (products: IProduct[], tag: string) => products.filter((product: IProduct) => product.tags?.includes(tag))
)

export default selectFilteredProducts;