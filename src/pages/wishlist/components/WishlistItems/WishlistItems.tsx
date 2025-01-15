import classes from "./WishlistItems.module.scss";

import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import Message from "@/components/Message/Message";
import ProductList from "@/components/ProductList/ProductList";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { ICart } from "@/models/ICart";
import { cartSlice } from "@/store/reducers/CartSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function WishlistItems() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {addToCart} = cartSlice.actions;
    const {products: wishlistProducts} = useAppSelector(state => state.wishlistReducer);
    const {products: cartProducts} = useAppSelector(state => state.cartReducer);
    const [isOpen, setIsOpen] = useState(false);

    const showMessage = () => {
        setIsOpen(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 4000)
    }

    const moveAllToCart = () => {
        wishlistProducts.forEach(wishProduct => {
            if (!cartProducts.find(cartProduct => wishProduct.id === cartProduct.id)) {
                const newCartProduct: ICart = {
                    id: wishProduct.id,
                    images: wishProduct.images,
                    name: wishProduct.name,
                    price: wishProduct.price,
                    quantity: 1,
                }
                dispatch(addToCart(newCartProduct));
            }
            showMessage();
        })
    }

    return (
        <section className={classes["wishlist-section"]}>
            <Message isOpen={isOpen}>
                {t("all-moved-to-cart")}
            </Message>
            <div className={classes["wishlist-container"]}>
                <header className={classes["wishlist-header"]}>
                    <h5 className={classes["wishlist-title"]}>
                        {t("wishlist")}
                        {wishlistProducts.length > 0 && ` (${wishlistProducts.length})`} 
                    </h5>
                    <ButtonOutlined onClick={moveAllToCart}>
                        {t("move-all-to-cart")}
                    </ButtonOutlined>
                </header>
                {wishlistProducts 
                ? <ProductList products={wishlistProducts} mode="all-products"/>
                : <h4 className={classes["wishlist-title"]}>{t("empty-wishlist")}</h4>}
            </div>
        </section>
    )
}