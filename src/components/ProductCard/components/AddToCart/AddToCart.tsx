import { useTranslation } from "react-i18next";
import classes from "./AddToCart.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { cartSlice } from "@/store/reducers/CartSlice";
import { useState } from "react";
import CartMessage from "../CartMessage/CartMessage";
import { IProduct } from "@/models/IProduct";
import { Link } from "react-router";
import { ICart } from "@/models/ICart";

interface Props {
    product: IProduct,
}

export default function AddToCart({product}: Props) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const {products} = useAppSelector(state => state.cartReducer);
    const dispatch = useAppDispatch();
    const {addToCart} = cartSlice.actions;

    const handleClick = () => {
        const newCartProduct: ICart = {
            id: product.id,
            name: product.name,
            price: product.price,
            images: product.images,
            quantity: 1,
        }
        
        dispatch(addToCart(newCartProduct));
        setIsOpen(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 4000)
    }

    return (
        <>
            <CartMessage isOpen={isOpen} />
            {products.find(cartProduct => cartProduct.id === product.id) ?
            <button className={classes["item-button"]}>
                <Link to="/cart" className={classes["item-link"]}>
                    {t("to-cart")}
                </Link>
            </button>
            :
            <button 
                onClick={handleClick} 
                className={classes["item-button"]}
                disabled={!product.isInStock}
            >
                {product.isInStock && t("add-to-cart")}
                {!product.isInStock && t("out-of-stock")}
            </button>}
        </>
        
    )
}