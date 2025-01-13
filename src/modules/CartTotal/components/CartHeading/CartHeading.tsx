import { useTranslation } from "react-i18next";
import classes from "./CartHeading.module.scss";
import Heading from "@/UI/headers/Heading/Heading";

export default function CartHeading() {
    const { t } = useTranslation();

    return (
        <Heading level="h5" className={classes["heading"]}>
            {t("cart-total")}
        </Heading>
    )
}