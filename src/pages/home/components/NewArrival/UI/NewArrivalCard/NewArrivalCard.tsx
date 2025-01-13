import Heading from "@/UI/headers/Heading/Heading";
import classes from "./NewArrivalCard.module.scss";
import LinkUnderlined from "@/UI/links/LinkUnderlined/LinkUnderlined";
import { useTranslation } from "react-i18next";

interface Props {
    title: string,
    subtitle: string,
    link: string,
    image: React.ReactNode;
    blur?: boolean
    layout: {
        columnStart: number,
        columnEnd: number,
        rowStart: number,
        rowEnd: number,
    }
}

export default function NewArrivalCard({title, subtitle, image, link, blur = false, layout}: Props) {
    const { t } = useTranslation();
    const gridArea = `
        ${layout.rowStart} /
        ${layout.columnStart} /
        ${layout.rowEnd} /
        ${layout.columnEnd}
    `

    return (
        <div className={classes["item"]} style={{gridArea}}>
            {blur && <div className={classes["item-blur"]} />}
            {image}
            <Heading level="h4" className={classes["item-title"]}>
                {title}
            </Heading>
            <p className={classes["item-subtitle"]}>
                {subtitle}
            </p>
            <LinkUnderlined to={link} className={classes["item-link"]}>
                {t("shop-now")}
            </LinkUnderlined>
        </div>
    )
}