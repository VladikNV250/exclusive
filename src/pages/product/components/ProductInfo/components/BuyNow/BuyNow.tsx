import { IProduct } from "@/models/IProduct";
import { cartSlice } from "@/store/reducers/CartSlice";
import ButtonCompact from "@/UI/buttons/ButtonCompact/ButtonCompact";
import { useAppDispatch } from "@/hooks/redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface Props {
    id: IProduct["id"];
    isInStock?: boolean
}

export default function BuyNow({id, isInStock = false}: Props) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {addToCart} = cartSlice.actions; 

    const handleClick = () => {
        dispatch(addToCart(id));
    }

    return (
        <Link to={"/cart"}>
            <ButtonCompact 
                onClick={handleClick}
                disabled={!isInStock}
            >
                {t("buy-now")}        
            </ButtonCompact>
        </Link>
    )
}