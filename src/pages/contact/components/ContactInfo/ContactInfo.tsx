import classes from "./ContactInfo.module.scss";
import Mail from "@/assets/icons/mail.svg?react";
import Phone from "@/assets/icons/phone.svg?react";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
    const { t } = useTranslation();

    return (
        <nav className={classes["info"]}>
            <div className={classes["info-container"]}>
                <div className={classes["title-container"]}>
                    <div className={classes["info-icon"]}>
                        <Phone 
                            width={40}
                            height={40}
                        />
                    </div>
                    <h6 className={classes["info-title"]}>
                        {t("call-to-us")}
                    </h6>
                </div>
                <div className={classes["text-container"]}>
                    <p className={classes["info-text"]}>
                        {t("we-available")}
                    </p>
                    <p className={classes["info-text"]}>
                        {t("phone")}: +8801611112222
                    </p>
                </div>
            </div>
            <div className={classes["info-container"]}>
                <div className={classes["title-container"]}>
                    <div className={classes["info-icon"]}>
                        <Mail 
                            width={40}
                            height={40}
                        />
                    </div>
                    <h6 className={classes["info-title"]}>
                        {t("write-to-us")}
                    </h6>
                </div>
                <div className={classes["text-container"]}>
                    <p className={classes["info-text"]}>
                        {t("fill-out-form")}
                    </p>
                    <p className={classes["info-text"]}>
                        {t("emails")}: customer@exclusive.com
                    </p>
                    <p className={classes["info-text"]}>
                        {t("emails")}: support@exclusive.com
                    </p>
                </div>
            </div>
        </nav>
    )
}