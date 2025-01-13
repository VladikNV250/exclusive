import { Footer } from "@/modules/Footer"
import { Navbar } from "./modules/Navbar"
import AppRouter from "./router/AppRouter"
import "./global.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
        <Navbar />
        <AppRouter />
        <Footer />
    </Provider>
  )
}

export default App
