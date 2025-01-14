import classes from "./ProductInfo.module.scss";

import AddToWishlist from "./components/AddToWishlist/AddToWishlist";
import BuyNow from "./components/BuyNow/BuyNow";
import ProductColors from "./components/ProductColors/ProductColors";
import ProductDecription from "./components/ProductDescription/ProductDecription";
import ProductPrice from "./components/ProductPrice/ProductPrice";
import ProductQuantity from "./components/ProductQuantity/ProductQuantity";
import ProductReviews from "./components/ProductReviews/ProductReviews";
import ProductSize from "./components/ProductSize/ProductSize";
import ProductTitle from "./components/ProductTitle/ProductTitle";
import SpecialsList from "./components/SpecialsList/SpecialsList";

import { IProduct } from "@/models/IProduct";

import { useAppSelector } from "@/hooks/redux";
import selectExchangeRate from "@/store/selectors/selectExchangeRate";
import { useTranslation } from "react-i18next";

interface Props {
    product: IProduct;
}

export function ProductInfo({product}: Props) {
    const { i18n } = useTranslation();
    const { 
        id, 
        name, 
        description, 
        price, 
        isInStock, 
        rating,
        availableColors,
        size,
        quantity
    } = product;
    const currentExchangeRate = useAppSelector(state => selectExchangeRate(state, i18n.language))

    return (
        <div className={classes["product-info"]}>
            <ProductTitle title={name} />
            <ProductReviews 
                isInStock={isInStock}
                id={id}    
                rating={rating}
            />
            <ProductPrice price={price * currentExchangeRate} />
            <ProductDecription 
                description={description} 
            />
            <div className={classes["horizontal-line"]} />
            <ProductColors colors={availableColors} />
            <ProductSize sizes={size ?? []} />
            <div className={classes["buttons-container"]}>
                <ProductQuantity 
                    id={id}
                    defaultQuantity={quantity ?? 1} 
                />
                <BuyNow id={id} isInStock={isInStock} />
                <AddToWishlist id={id} />
            </div>
            <SpecialsList />
        </div>
    )
}