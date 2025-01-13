import { useAppDispatch } from "@/hooks/redux";
import { IProduct } from "@/models/IProduct";
import { cartSlice } from "@/store/reducers/CartSlice";
import ButtonCompact from "@/UI/buttons/ButtonCompact/ButtonCompact";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
    id: IProduct["id"];
    isInStock: boolean
}

export default function BuyNow({id, isInStock}: Props) {
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