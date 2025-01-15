import { useTranslation } from "react-i18next";
import classes from "./CartTotal.module.scss";
import CartHeading from "./components/CartHeading/CartHeading";
import CartTotalItem from "./components/CartTotalItem/CartTotalItem";
import ToCheckout from "./components/ToCheckout/ToCheckout";
import { useEffect, useState } from "react";
import { ICart } from "@/models/ICart";

interface Props {
    products: ICart[];
}

export function CartTotal({products}: Props) {
    const { t } = useTranslation();
    const [sum, setSum] = useState(0);
    const deliveryCost = 10;

    useEffect(() => {
        let total = 0;
        products.map((product) => {
            if (product.quantity) total += product.price * product.quantity;
            else total += product.price * 1;
        })  
        setSum(total);
    }, [products])

    return (
        <div className={classes["cart-total"]}>
            <CartHeading />
            <div className={classes["cart-container"]}>
                <CartTotalItem order={`${t("subtotal")}:`} summary={sum} />
                <CartTotalItem order={`${t("shipping")}:`} summary={deliveryCost}    />
                <CartTotalItem order={`${t("total")}:`}    summary={sum + deliveryCost} />
            </div>
            <ToCheckout />
        </div>
    )
}