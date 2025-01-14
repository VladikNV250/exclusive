import { Footer } from "@/modules/Footer"
import { Navbar } from "./modules/Navbar"
import AppRouter from "./router/AppRouter"
import "./global.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/redux";
import { fetchAllProducts, fetchUserById } from "./store/reducers/ActionCreators";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());

        const id = localStorage.getItem("user");
        if (id) dispatch(fetchUserById(id));
    }, [dispatch])

    return (
        <>
            <Navbar />
            <AppRouter />
            <Footer />
        </>
    )
}

export default App;
