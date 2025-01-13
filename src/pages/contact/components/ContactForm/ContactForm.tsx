import InputInfoBox from "@/UI/inputs/InputInfoBox/InputInfoBox";
import classes from "./ContactForm.module.scss";
import TextareaInfoBox from "@/UI/textareas/TextareaInfoBox/TextareaInfoBox";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
    const { t } = useTranslation();

    return (
        <form action="" className={classes["contact-form"]}>
            <div className={classes["inputs-container"]}>
                <InputInfoBox placeholder={t("placeholder-contact-name")}  type="text"   required />
                <InputInfoBox placeholder={t("placeholder-contact-email")} type="email"  required />
                <InputInfoBox placeholder={t("placeholder-phone")}  type="phone" required />
            </div>
            <TextareaInfoBox placeholder={t("placeholder-message")} />
            <div className={classes["button-wrapper"]}>
                <ButtonLarge type="submit">
                    {t("send-message")}
                </ButtonLarge>
            </div>
        </form>
    )
}