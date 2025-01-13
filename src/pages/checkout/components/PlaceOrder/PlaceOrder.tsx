import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import { useTranslation } from "react-i18next";

export default function PlaceOrder() {
    const { t } = useTranslation();

    return (
        <ButtonLarge type="submit">
            {t("place-order")}
        </ButtonLarge>
    )
}