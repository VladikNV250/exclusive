import { useTranslation } from "react-i18next";
import classes from "./AddToCart.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { cartSlice } from "@/store/reducers/CartSlice";
import { useState } from "react";
import CartMessage from "../CartMessage/CartMessage";
import { IProduct } from "@/models/IProduct";
import { Link } from "react-router";

interface Props {
    id: IProduct["id"],
    isInStock: IProduct["isInStock"],
}

export default function AddToCart({id, isInStock = false}: Props) {
    const { t } = useTranslation();
    
    const [isOpen, setIsOpen] = useState(false);
    const {productIDs} = useAppSelector(state => state.cartReducer);
    
    const dispatch = useAppDispatch();
    const {addToCart} = cartSlice.actions;

    const handleClick = () => {
        dispatch(addToCart(id));
        setIsOpen(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 4000)
    }

    return (
        <>
            <CartMessage isOpen={isOpen} />
            {productIDs.includes(id) ?
            <button className={classes["item-button"]}>
                <Link to="/cart" className={classes["item-link"]}>
                    {t("to-cart")}
                </Link>
            </button>
            :
            <button 
                onClick={handleClick} 
                className={classes["item-button"]}
                disabled={!isInStock}
            >
                {isInStock && t("add-to-cart")}
                {!isInStock && t("out-of-stock")}
            </button>}
        </>
        
    )
}