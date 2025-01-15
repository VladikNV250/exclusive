import classes from "./Product.module.scss";

import Roadmap from "@/modules/Roadmap/Roadmap";

import ProductGallery from "./components/ProductGallery/ProductGallery";
import { ProductInfo } from "./components/ProductInfo";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

import { useAppDispatch } from "@/hooks/redux";
import { routeSlice } from "@/store/reducers/RouteSlice";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { goodsAPI } from "@/api/GoodsAPI";
import { IProduct } from "@/models/IProduct";


export default function Product() {
    const { t } = useTranslation();
    const { productID } = useParams();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        (async () => {
            const response = await goodsAPI.fetchProduct({id: productID ?? ""});
            if (response)
                setProduct(response[0]); 
        })()
    }, [productID])

    const dispatch = useAppDispatch();
    const { addRoute } = routeSlice.actions;
    dispatch(addRoute([
        {name: t(product?.category?.name || ""), link: product?.category?.href || "", level: 1},
        {name: product?.name || "", link: `/product/${productID}`, level: 2}
    ]))

    return (
        <main>
            <Roadmap />
            {product ?
            <section className={classes["product-section"]}>
                <div className={classes["product-container"]}>
                    <ProductGallery images={product.images.default} />
                    <ProductInfo product={product} setProduct={setProduct} />
                </div>
                <RelatedProducts tag={product.tags?.[0] ?? ""} />
            </section>
            :
            <div>Can't load a product</div>}
        </main>
    )
}