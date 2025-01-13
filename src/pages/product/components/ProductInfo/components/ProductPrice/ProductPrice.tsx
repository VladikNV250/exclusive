import formatPrice from "@/helpers/formatPrice";
import classes from "./ProductPrice.module.scss";

interface Props {
    price: number
}

export default function ProductPrice({price}: Props) {
    return (
        <h3 className={classes["price"]}>{formatPrice(price, 2)}</h3>
    )
}