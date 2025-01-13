import { useTranslation } from "react-i18next";
import classes from "./InputCoupon.module.scss";

export default function InputCoupon() {
    const { t } = useTranslation();

    return (
        <input
            type="text"
            placeholder={t("placeholder-coupon")}
            className={classes["input"]}
        />
    )
}