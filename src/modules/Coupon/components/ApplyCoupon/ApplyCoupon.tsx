import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import { useTranslation } from "react-i18next";

export default function ApplyCoupon() {
    const { t } = useTranslation();

    return (
        <ButtonLarge>
            {t("apply-coupon")}
        </ButtonLarge>
    )
}