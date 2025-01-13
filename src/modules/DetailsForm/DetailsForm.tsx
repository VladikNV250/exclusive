import classes from "./DetailsForm.module.scss";
import FormInput from "./components/FormInput/FormInput";
import SaveCheckbox from "./components/SaveCheckbox/SaveCheckbox";
import { useTranslation } from "react-i18next";

export function DetailsForm() {
    const { t } = useTranslation();

    return (
        <form className={classes["form"]} id="details-form" action="">
            <FormInput name="first-name" label={t("label-first-name")} type="text" required />
            <FormInput name="company-name" label={t("label-company-name")} type="text" />
            <FormInput name="street-address" label={t("label-street-address")} type="text" required />
            <FormInput name="apartment" label={t("label-apartment")} type="text" />
            <FormInput name="city" label={t("label-city")} type="text" required />
            <FormInput name="phone-number" label={t("label-phone")} type="number" required />
            <FormInput name="email" label={t("label-email")} type="email" required />
            <SaveCheckbox />
        </form>
    )
}