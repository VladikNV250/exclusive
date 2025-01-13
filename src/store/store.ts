import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductSlice";
import routeReducer from "./reducers/RouteSlice";
import wishlistReducer from "./reducers/WishlistSlice";
import cartReducer from "./reducers/CartSlice";
import exchangeRateReducer from "./reducers/ExchangeRateSlice";
import userReducer from "./reducers/UserSlice";

const rootReducer = combineReducers({
    productReducer,
    routeReducer,
    wishlistReducer,
    cartReducer,
    exchangeRateReducer,
    userReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];