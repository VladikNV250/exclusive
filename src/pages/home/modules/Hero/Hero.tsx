import CategoriesSidebar from "./components/CategoriesSidebar/CategoriesSidebar";
import { Slider } from "./components/Slider";
import classes from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={classes["hero"]}>
            <div className={classes["hero-container"]}>
                <CategoriesSidebar className={classes["hero-sidebar"]} />
                <Slider />
            </div>
        </section>
    )
}