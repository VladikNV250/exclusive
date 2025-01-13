import { ButtonHTMLAttributes } from "react";
import classes from "./ButtonGoogle.module.scss";
import Google from "@/assets/icons/google.svg?react";
import { useTranslation } from "react-i18next";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    otherProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function ButtonGoogle({...otherProps}: Props) {
    const { t } = useTranslation();

    return (
        <button className={classes["button-google"]} {...otherProps}>
            <Google className={classes["icon"]} width={24} height={24} />
            {t("sign-up-with-google")}
        </button>
    )
}