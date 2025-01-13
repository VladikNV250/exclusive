import classes from "./Product.module.scss";

import Roadmap from "@/modules/Roadmap/Roadmap";

import ProductGallery from "./components/ProductGallery/ProductGallery";
import { ProductInfo } from "./components/ProductInfo";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

// import { useAppDispatch, useAppSelector } from "@/hooks/redux";
// import { routeSlice } from "@/store/reducers/RouteSlice";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";


export default function Product() {
    const { t } = useTranslation();
    const { productID } = useParams();
    // const product = useAppSelector(state => 
        // state.productReducer.products.find(product => product.id === productID));

    // const dispatch = useAppDispatch();
    // const { addRoute } = routeSlice.actions;
    // dispatch(addRoute([
    //     {name: t(product?.category.name), link: product?.category.href, level: 1},
    //     {name: product?.name, link: `/${productID}`, level: 2}
    // ]))

    return (
        <main>
            <Roadmap />
            {/* {product ?
            <section className={classes["product-section"]}>
                <div className={classes["product-container"]}>
                    <ProductGallery images={product.images.default} />
                    <ProductInfo product={product} />
                </div>
                <RelatedProducts tags={product?.tags} id={product?.id} />
            </section>
            :
            <div>Can't load a product</div>} */}
        </main>
    )
}