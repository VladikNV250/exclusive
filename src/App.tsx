import { Footer } from "@/modules/Footer"
import { Navbar } from "./modules/Navbar"
import AppRouter from "./router/AppRouter"
import "./global.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/redux";
import { fetchUserById } from "./store/reducers/ActionCreators";
import { wishlistSlice } from "./store/reducers/WishlistSlice";
import { cartSlice } from "./store/reducers/CartSlice";

function App() {
    const dispatch = useAppDispatch();
    const {getWishlistFromLocalStorage} = wishlistSlice.actions;
    const {getCartFromLocalStorage} = cartSlice.actions;

    useEffect(() => {
        const id = localStorage.getItem("user");
        if (id) dispatch(fetchUserById(id));

        dispatch(getWishlistFromLocalStorage());
        dispatch(getCartFromLocalStorage());
    }, [dispatch, getWishlistFromLocalStorage, getCartFromLocalStorage])

    return (
        <>
            <Navbar />
            <AppRouter />
            <Footer />
        </>
    )
}

export default App;
