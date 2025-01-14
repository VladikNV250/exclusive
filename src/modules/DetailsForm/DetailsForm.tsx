import classes from "./DetailsForm.module.scss";
import SaveCheckbox from "./components/SaveCheckbox/SaveCheckbox";
import { useTranslation } from "react-i18next";
import DetailsFormInput from "./components/DetailsFormInput/DetailsFormInput";

export function DetailsForm() {
    const { t } = useTranslation();

    return (
        <form className={classes["form"]} id="details-form" action="">
            <DetailsFormInput name="first-name" label={t("label-first-name")} type="text" required />
            <DetailsFormInput name="company-name" label={t("label-company-name")} type="text" />
            <DetailsFormInput name="street-address" label={t("label-street-address")} type="text" required />
            <DetailsFormInput name="apartment" label={t("label-apartment")} type="text" />
            <DetailsFormInput name="city" label={t("label-city")} type="text" required />
            <DetailsFormInput name="phone-number" label={t("label-phone")} type="number" required />
            <DetailsFormInput name="email" label={t("label-email")} type="email" required />
            <SaveCheckbox />
        </form>
    )
}