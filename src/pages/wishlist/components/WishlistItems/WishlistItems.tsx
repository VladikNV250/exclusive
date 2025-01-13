import classes from "./WishlistItems.module.scss";

import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import ProductList from "@/components/ProductList/ProductList";

// import { useAppSelector } from "@/hooks/redux";
import { useTranslation } from "react-i18next";


export default function WishlistItems() {
    const { t } = useTranslation();
    // const {productIDs} = useAppSelector(state => state.wishlistReducer);
    // const {products} = useAppSelector(state => state.productReducer);
    // const wishProducts = productIDs.map(id => products.find(product => product.id === id));

    return (
        <section className={classes["wishlist-section"]}>
            <div className={classes["wishlist-container"]}>
                <header className={classes["wishlist-header"]}>
                    <h5 className={classes["wishlist-title"]}>
                        {t("wishlist")}
                        {/* {productIDs.length > 0 && ` (${productIDs.length})`}  */}
                    </h5>
                    <ButtonOutlined>
                        {t("move-all-to-cart")}
                    </ButtonOutlined>
                </header>
                {/* {wishProducts.length > 0 
                ? <ProductList products={wishProducts} mode="all-products"/>
                : <h4 className={classes["wishlist-title"]}>{t("empty-wishlist")}</h4>} */}
            </div>
        </section>
    )
}