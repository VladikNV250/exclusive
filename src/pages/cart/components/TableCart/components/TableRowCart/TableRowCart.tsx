import InputQuantity from "@/UI/inputs/InputQuantity/InputQuantity";
import classes from "./TableRowCart.module.scss";
import { IProduct } from "@/models/IProduct";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { productSlice } from "@/store/reducers/ProductSlice";
import { useTranslation } from "react-i18next";
import selectExchangeRate from "@/store/selectors/selectExchangeRate";
import formatPrice from "@/helpers/formatPrice";
import { cartSlice } from "@/store/reducers/CartSlice";
import { Link } from "react-router";

interface Props {
    product: IProduct;
}

export default function TableRowCart({product}: Props) {
    const { i18n } = useTranslation();
    const { id, name, price, images, quantity } = product;
    const currentExchangeRate = useAppSelector(state => selectExchangeRate(state, i18n.language));
    const dispatch = useAppDispatch();
    const {updateQuantity} = productSlice.actions;
    const {removeFromCart} = cartSlice.actions;

    const handleRemove = () => {
        dispatch(removeFromCart(product.id))
    }

    const changeQuantity = (quantity: number) => {
        dispatch(updateQuantity({id: product.id, quantity}));
    }

    return (
        <tr className={classes["table-row"]}>
            <th className={classes["table-item"]}>
                <div className={classes["table-ceil--name"]}>
                    
                    <div className={classes["item-image-container"]}>
                        <button 
                            onClick={handleRemove}
                            className={classes["item-image-button"]}
                        >
                            <div />
                            <div />
                        </button>
                        <img 
                            src={images.default[0]} 
                            alt={name} 
                            className={classes["item-image"]}
                        />
                    </div>
                    <Link to={`/${id}`} className={classes["item-name"]}>
                        {name}
                    </Link>
                </div>
            </th>
            <th className={classes["table-item"]}>
                {formatPrice(price * currentExchangeRate)}
            </th>
            <th className={classes["table-item"]}>
                <InputQuantity 
                    quantity={quantity ? quantity : 1} 
                    changeQuantity={changeQuantity}    
                />
            </th>
            <th className={classes["table-item"]}>
                {quantity 
                ? formatPrice(price * currentExchangeRate * quantity)
                : formatPrice(price * currentExchangeRate * 1)}
            </th>
        </tr>
    )
}