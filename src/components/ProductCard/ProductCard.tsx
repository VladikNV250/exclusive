import classes from "./ProductCard.module.scss";

import { useState } from "react";

import Heading from "@/UI/headers/Heading/Heading";
import { ProductTag } from "./components/ProductTag/ProductTag";
import ButtonWishlist from "./components/ButtonWishlist/ButtonWishlist";
import ButtonQuickView from "./components/ButtonQuickView/ButtonQuickView";
import { RadioColor } from "./components/RadioColor/RadioColor";
import { ProductReviewStar } from "./components/ProductReviewStar/ProductReviewStar";

import { IProduct } from "@/models/IProduct";
import formatPrice from "@/helpers/formatPrice";
import getDiscount from "./helpers/getDiscount";
import AddToCart from "./components/AddToCart/AddToCart";
import { useAppSelector } from "@/hooks/redux";
import selectExchangeRate from "@/store/selectors/selectExchangeRate";
import { useTranslation } from "react-i18next";

import defaultPlaceholder from "@/assets/default-placeholder.png";
import { Link } from "react-router";
import CircleLoader from "@/UI/loaders/CircleLoader/CircleLoader";

interface Props {
    product: IProduct,
}

export function ProductCard({product}: Props) {
    const {
        id, 
        images, 
        name, 
        price, 
        oldPrice,  
        isNew, 
        rating, 
        availableColors
    } = product
    const { i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState("default");
    const currentExchangeRate = useAppSelector(state => selectExchangeRate(state, i18n.language));

    const handleChangeColor = (color: string) => { setSelectedColor(color); }

    return (
        <div className={classes["product-card"]}>
            <div className={classes["item-container"]}>
                <div className={classes["item-background"]}>
                    {isLoading && 
                    <div className={classes["loader-container"]}>
                        <CircleLoader loading={isLoading} />
                    </div>}
                    <Link to={`/${id}`} className={classes["background-link"]}>
                        <img 
                            src={images[selectedColor][0] ? images[selectedColor][0] : defaultPlaceholder} 
                            onLoad={() => setIsLoading(false)}
                            onError={(e) => {
                                setIsLoading(false);
                                (e.target as HTMLImageElement).src = defaultPlaceholder;
                            }} 
                            className={classes["background-image"]} 
                        />
                    </Link>
                </div>
                <div className={classes["item-content__left"]}>
                    {isNew && <ProductTag type="new"/>}
                    {oldPrice && 
                    <ProductTag type="discount">
                        {getDiscount(price, oldPrice)}
                    </ProductTag>}
                </div>
                <div className={classes["item-content__right"]}>
                    <ButtonWishlist product={product} />
                    <ButtonQuickView product={product} />
                </div>
                <AddToCart product={product} />
            </div>
            <div className={classes["product-body"]}>
                <Link to={`/product/${id}`}>
                    <Heading isLoading={isLoading} level="h6" className={classes["product-name"]}>
                        {name}
                    </Heading>
                </Link>
                <div className={classes["product-content"]}>
                    <Heading isLoading={isLoading} level="h6" className={classes["product-price"]}>
                        {formatPrice(price * currentExchangeRate)} 
                    </Heading>
                    {oldPrice && 
                    <Heading isLoading={isLoading} level="h6" className={classes["product-price__old"]}>
                        {formatPrice(oldPrice * currentExchangeRate)}
                    </Heading>}
                    <ProductReviewStar
                        product={product}
                        isLoading={isLoading}
                        rating={rating}
                    />
                    {availableColors &&
                    <RadioColor 
                        colors={availableColors} 
                        name={name} 
                        isLoading={isLoading}
                        onChange={handleChangeColor}
                    />}
                </div>
            </div>
        </div>
    );
}