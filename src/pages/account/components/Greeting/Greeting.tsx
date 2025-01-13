import { useTranslation } from "react-i18next";
import classes from "./Greeting.module.scss";

interface Props {
    firstName: string,
    lastName: string,
}

export default function Greeting({firstName, lastName}: Props) {
    const { t } = useTranslation();

    return (
        <p className={classes["greeting"]}>
            {t("welcome")}! <span className={classes["text-highlight"]}>{firstName} {lastName}</span>
        </p>
    )
}