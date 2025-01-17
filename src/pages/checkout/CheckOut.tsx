import classes from "./CheckOut.module.scss";

import Roadmap from "@/modules/Roadmap/Roadmap";
import { DetailsForm } from "@/modules/DetailsForm";
import { PaymentMethod } from "@/modules/PaymentMethod/PaymentMethod";
import { Coupon } from "@/modules/Coupon";

import CheckoutHeader from "./components/CheckoutHeader/CheckoutHeader";
import CheckoutTotalItem from "./components/CheckoutTotalItem/CheckoutTotalItem";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import CheckoutProductItem from "./components/CheckoutProductItem/CheckoutProductItem";

import selectExchangeRate from "@/store/selectors/selectExchangeRate";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { routeSlice } from "@/store/reducers/RouteSlice";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function CheckOut() {
    const { t, i18n } = useTranslation();
    const {products} = useAppSelector(state => state.cartReducer);
    const currentExchangeRate = useAppSelector(state => selectExchangeRate(state, i18n.language))
    const [sum, setSum] = useState(0);
    const deliveryCost = 10;

    const dispatch = useAppDispatch();
    const {addRoute} = routeSlice.actions;
    dispatch(addRoute([{
        name: t("checkout"), link: "/checkout", level: 2,
    }]))

    useEffect(() => {
        let total = 0;
        products.map((product) => {
            if (product.quantity) total += product.price * product.quantity;
            else total += product.price * 1;
        })  
        setSum(total);
    }, [products])

    return (
        <main className={classes["checkout"]}>
            <Roadmap />
            <section className={classes["checkout-section"]}>
                <div className={classes["checkout-container"]}>
                    <section className={classes["checkout-content__one"]}>
                        <CheckoutHeader>
                            {t("billing-details")}
                        </CheckoutHeader>
                        <DetailsForm />
                    </section>
                    <section className={classes["checkout-content__two"]}>
                        <div className={classes["product-item-container"]}>
                            {products.map((product) => 
                                <CheckoutProductItem 
                                    image={product.images.default[0]}
                                    name={product.name}
                                    price={product.price * currentExchangeRate * (product.quantity ? product.quantity : 1)}
                                />                            
                            )}
                        </div>
                        <div className={classes["total-item-wrapper"]}>
                            <CheckoutTotalItem order={`${t("subtotal")}:`} summary={sum} />
                            <CheckoutTotalItem order={`${t("shipping")}:`} summary={deliveryCost}   />
                            <CheckoutTotalItem order={`${t("total")}:`}    summary={sum + deliveryCost} />
                        </div>
                        <PaymentMethod />
                        <div className={classes["coupon-wrapper"]}>
                            <Coupon />                            
                        </div>
                        <PlaceOrder />
                    </section>
                </div>          
            </section>
            
        </main>
    )
}