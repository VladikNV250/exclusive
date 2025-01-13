import { Footer } from "@/modules/Footer"
import { Navbar } from "./modules/Navbar"
import AppRouter from "./router/AppRouter"
import "./global.scss";

function App() {

  return (
    <>
        <Navbar />
        <AppRouter />
        <Footer />
    </>
  )
}

export default App
