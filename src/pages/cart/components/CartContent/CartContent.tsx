import { Coupon } from "@/modules/Coupon";
import classes from "./CartContent.module.scss";
import { CartTotal } from "@/modules/CartTotal";
import { ICart } from "@/models/ICart";

interface Props {
    products: ICart[];
}

export default function CartContent({products}: Props) {
    const isCartEmpty = products.length === 0;

    if (!isCartEmpty) return (
        <section className={classes["cart-section"]}>
            <div className={classes["cart-container"]}>
                <Coupon />
                <CartTotal products={products} />
            </div>
        </section>
    )
}