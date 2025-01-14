import { IProduct } from "@/models/IProduct";
import classes from "./QuickView.module.scss";
import Modal from "@/UI/modals/Modal/Modal";
import { createPortal } from "react-dom";
import { Dispatch, SetStateAction } from "react";
import Heading from "@/UI/headers/Heading/Heading";
import { ProductReviewStar } from "../ProductReviewStar/ProductReviewStar";
import ButtonCompact from "@/UI/buttons/ButtonCompact/ButtonCompact";
import { useTranslation } from "react-i18next";
import formatPrice from "@/helpers/formatPrice";
import { useAppSelector } from "@/hooks/redux";
import selectExchangeRate from "@/store/selectors/selectExchangeRate";
import { Link } from "react-router";

interface Props {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    product: IProduct;
}

export default function QuickView({isOpen, setIsOpen, product}: Props) {
    const { t, i18n } = useTranslation();
    const currentExchangeRate = useAppSelector(state => selectExchangeRate(state, i18n.language));

    if (isOpen) return createPortal(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={classes["quick-view-window"]} onClick={(e) => {e.stopPropagation()}}>
                <img 
                    src={product.images.default[0]} 
                    alt={product.name} 
                    className={classes["quick-view-image"]}
                />
                <div className={classes["quick-view-body"]}>
                    <Heading level="h6" className={classes["quick-view-name"]}>
                        {product.name}
                    </Heading>
                    <p className={classes["quick-view-description"]}>
                        {product.description}
                    </p>
                    <div className={classes["quick-view-content"]}>
                        <Heading level="h6" className={classes["quick-view-price"]}>
                            {formatPrice(product.price * currentExchangeRate)}
                        </Heading>
                        {product.oldPrice &&
                        <Heading level="h6" className={classes["quick-view-price__old"]}>
                            {formatPrice(product.oldPrice * currentExchangeRate)}
                        </Heading>}
                    </div>
                    <div className={classes["review-wrapper"]}>
                        <ProductReviewStar 
                            id={product.id}
                            rating={product.rating}
                        />
                    </div>
                    <Link to={`/product/${product.id}`}>
                        <ButtonCompact>
                            {t("view-more")}
                        </ButtonCompact>
                    </Link>
                </div>
            </div>
        </Modal>,
        document.body,
    );
}