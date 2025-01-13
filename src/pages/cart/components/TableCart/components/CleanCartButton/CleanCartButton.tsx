import { useAppDispatch } from "@/hooks/redux";
import { cartSlice } from "@/store/reducers/CartSlice";
import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import { useTranslation } from "react-i18next";

export default function CleanCartButton() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {cleanCart} = cartSlice.actions;

    const handleClick = () => {
        dispatch(cleanCart());
    }
    
    return (
        <ButtonOutlined onClick={handleClick}>
            {t("clean-cart")}
        </ButtonOutlined>
    )
}