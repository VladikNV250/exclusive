import Heading from "@/UI/headers/Heading/Heading";
import classes from "./Banner.module.scss";
import { Timer } from "@/components/Timer/Timer";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import jbl from "@/assets/banner/jbl.png";
import { useTranslation } from "react-i18next";

export default function Banner() {
    const { t } = useTranslation();
    const saleDate = new Date(2025, 0, 19);
    
    return (
        <section className={classes["banner"]}>
            <div className={classes["banner-container"]}>
                <div className={classes["banner-content"]}>
                    <Heading level="h6" className={classes["banner-subtitle"]}>
                        {t("categories")}
                    </Heading>
                    <Heading level="h1" className={classes["banner-title"]}>
                        {t("banner")}    
                    </Heading>
                    <div className={classes["timer-wrapper"]}>
                        <Timer date={saleDate} type="circle" colorStyle="white" />
                    </div>
                    <ButtonLarge className={classes["banner-button"]}>
                        {t("buy-now")}
                    </ButtonLarge>
                </div>
                <div className={classes["image-container"]}>
                    <div className={classes["image-decor"]} />
                    <img src={jbl} alt="JBL Speakers" className={classes["image"]} />
                </div>
            </div>
        </section>
    )
}