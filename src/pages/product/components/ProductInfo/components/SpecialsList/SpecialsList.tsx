import classes from "./SpecialsList.module.scss";
import Delivery from "@/assets/icons/delivery.svg?react";
import Return from "@/assets/icons/return.svg?react";
import { useTranslation } from "react-i18next";

export default function SpecialsList() {
    const { t } = useTranslation();
    const specials = [
        {
            Icon: Delivery, 
            title: t("free-delivery"), 
            link: t("free-delivery-description"),
            url: "/"
        },
        {
            Icon: Return, 
            title: t("return-delivery"), 
            subtitle: t("return-delivery-description"), 
            link: t("details"),
            url: "/"
        },
    ]

    return (
        <div className={classes["specials-list"]}>
            {specials.map((item, index) => 
            <div key={index} className={classes["specials-item"]}>
                <item.Icon width={40} height={40} />
                <div className={classes["item-body"]}>
                    <h4 className={classes["item-title"]}>{item.title}</h4>
                    <p className={classes["item-subtitle"]}>{item.subtitle}</p>
                    <a href={item.url} className={classes["item-link"]}>{item.link}</a>
                </div>
            </div>
            )}
        </div>
    )
}