import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ToShop() {
    const { t } = useTranslation();

    return (
        <Link to={"/"}>
            <ButtonOutlined>
                {t("return-to-shop")}
            </ButtonOutlined>
        </Link>
    )
}