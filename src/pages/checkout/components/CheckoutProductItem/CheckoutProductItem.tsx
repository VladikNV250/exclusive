import formatPrice from "@/helpers/formatPrice";
import classes from "./CheckoutProductItem.module.scss";

interface Props {
    image: string,
    name: string,
    price: number,
}

export default function CheckoutProductItem({image, name, price}: Props) {
    return (
        <div className={classes["product-item"]}>
            <div className={classes["image-container"]}>
                <img src={image} className={classes["product-image"]} alt={name} />
                <p className={classes['product-name']}>
                    {name}
                </p>
            </div>
            <p className={classes["product-price"]}>
                {formatPrice(price)}
            </p>
        </div>
    )
}