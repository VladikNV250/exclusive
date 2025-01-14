import classes from "./Home.module.scss";
import Hero from "./modules/Hero/Hero";
import Category from "./modules/Category/Category";
import BestSelling from "./modules/BestSelling/BestSelling";
import Banner from "./modules/Banner/Banner";
import Explore from "./modules/Explore/Explore";
import NewArrival from "./modules/NewArrival/NewArrival";
import Sales from "./modules/Sales/Sales";

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
