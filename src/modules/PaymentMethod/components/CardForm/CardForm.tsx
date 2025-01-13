import InputInfoBox from "@/UI/inputs/InputInfoBox/InputInfoBox";
import classes from "./CardForm.module.scss";
import { useTranslation } from "react-i18next";

export default function CardForm() {
    const { t } = useTranslation();

    return (
        <form className={classes["form"]} id="card-form" action="">
            <InputInfoBox name="card-number" placeholder={t("placeholder-card-number")} type="number" />
            <div className={classes["inputs-container"]}>
                <InputInfoBox name="ex-date" placeholder={t("placeholder-date")} type="number" />
                <InputInfoBox name="cvv" placeholder={t("placeholder-cvv")} type="number"/>
            </div>
        </form>
    )
}