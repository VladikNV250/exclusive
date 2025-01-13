import Heading from "@/UI/headers/Heading/Heading";
import classes from "./SlideType1.module.scss";
import Arrow from "@/assets/icons/arrow-right.svg?react";
import { useTranslation } from "react-i18next";

interface Props {
    logo: string,
    title: {
        header: string,
        content: string,
    },
    image: string,
    isSelected: boolean;
}

export default function SlideType1({logo, title, image, isSelected = false}: Props) {
    const { t } = useTranslation();
    const selectedClass = isSelected ? classes["slide-container__selected"] : "";

    return (
        <div className={`${classes["slide-container"]} ${selectedClass}`} >
            <div className={classes["slide-content"]}>
                <header className={classes["slide-header"]}>
                    <img src={logo} className={classes["header-logo"]} />
                    <Heading level="h6" className={classes["header-title"]}>
                        {title.header}
                    </Heading>
                </header>
                <Heading level="h1" className={classes["slide-title"]}>
                    {title.content}
                </Heading>
                <a href="/" className={classes["slide-link"]}>
                    <p className={classes["cta-text"]}>
                        {t("shop-now")}
                    </p>
                    <Arrow width={24} height={24} />
                </a>
            </div>
            <img loading="lazy" src={image} className={classes["slide-background"]} />
        </div>
    )
}