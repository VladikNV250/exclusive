import { IProduct } from "@/models/IProduct";
import { cartSlice } from "@/store/reducers/CartSlice";
import ButtonCompact from "@/UI/buttons/ButtonCompact/ButtonCompact";
import { useAppDispatch } from "@/hooks/redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ICart } from "@/models/ICart";

interface Props {
    product: IProduct;
    quantity: number;
}

export default function BuyNow({product, quantity}: Props) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {addToCart} = cartSlice.actions; 

    const handleClick = () => {
        const newCartProduct: ICart = {
            id: product.id,
            images: product.images,
            name: product.name,
            price: product.price,
            quantity: quantity,
        }
        dispatch(addToCart(newCartProduct));
    }

    return (
        <Link to={"/cart"}>
            <ButtonCompact 
                onClick={handleClick}
                disabled={!product.isInStock}
            >
                {t("buy-now")}        
            </ButtonCompact>
        </Link>
    )
}