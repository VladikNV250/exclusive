import classes from "./Home.module.scss";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import BestSelling from "./components/BestSelling/BestSelling";
import Banner from "./components/Banner/Banner";
import Explore from "./components/Explore/Explore";
import NewArrival from "./components/NewArrival/NewArrival";
import Sales from "./components/Sales/Sales";

export default function Home() {
    return (
        <main className={classes.home}>
            <Hero />
            <Sales />
            <Category />
            <BestSelling />
            <Banner />
            <Explore />
            <NewArrival />
        </main>
    )
}
