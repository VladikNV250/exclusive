import classes from "./Search.module.scss";

import Roadmap from "@/modules/Roadmap/Roadmap";
import ProductList from "@/components/ProductList";
import Heading from "@/UI/headers/Heading/Heading";

import { routeSlice } from "@/store/reducers/RouteSlice";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch } from "@/hooks/redux";
import { IProduct } from "@/models/IProduct";
import { goodsAPI } from "@/api/GoodsAPI";

export default function Search() {
    const { t } = useTranslation();
    const [products, setProducts] = useState<IProduct[]>([]);
    const { query = "" } = useParams(); 
    const dispatch = useAppDispatch();
    const {addRoute} = routeSlice.actions;

    useEffect(() => {
        (async () => {
            try {
                const searchedProducts = await goodsAPI.fetchProductByName(query);
                if (searchedProducts) setProducts(searchedProducts);
            } catch (e) {
                console.error(e);
            }
        })()
        
        dispatch(addRoute([{
            name: query, link: `/search/${query}`, level: 1,
        }]))
    }, [query, addRoute, dispatch]);

    return (
        <main>
            <Roadmap />
            <section className={classes["search-section"]}>
                <div className={classes["search-container"]}>
                    {products.length > 0
                    ? <ProductList products={products} mode="all-products" />
                    : <Heading level="h2">{t("nothing-searched")}</Heading>}
                </div>
            </section>
        </main>
    )
}