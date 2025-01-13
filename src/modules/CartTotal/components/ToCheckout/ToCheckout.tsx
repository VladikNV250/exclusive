import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import classes from "./ToCheckout.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function ToCheckout() {
    const { t } = useTranslation();

    return (
        <Link to={"/checkout"} className={classes["button"]}>
            <ButtonLarge>
                {t("proceed-to-checkout")}    
            </ButtonLarge>
        </Link>
        
    )
}