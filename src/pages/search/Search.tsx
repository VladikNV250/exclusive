
import Roadmap from "@/modules/Roadmap/Roadmap";
import ProductList from "@/components/ProductList";
import Heading from "@/UI/headers/Heading/Heading";

import { routeSlice } from "@/store/reducers/RouteSlice";
import { fetchProductByName } from "@/store/reducers/ActionCreators";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch } from "@/hooks/redux";
import { IProduct } from "@/models/IProduct";

export default function Search() {
    const { t } = useTranslation();
    const [products, setProducts] = useState<IProduct[]>([]);
    const { searchedProductName = "" } = useParams(); 
    const dispatch = useAppDispatch();
    const {addRoute} = routeSlice.actions;

    useEffect(() => {
        (async () => {
            try {
                const searchedProducts = await dispatch(fetchProductByName(searchedProductName)).unwrap();
                if (searchedProducts) setProducts(searchedProducts);
            } catch (e) {
                console.error(e);
            }
        })()
        
        dispatch(addRoute([{
            name: searchedProductName, link: `/search/${searchedProductName}`, level: 1,
        }]))
    }, [searchedProductName, addRoute, dispatch]);

    return (
        <main>
            <Roadmap />
            <section>
                {products
                ? <ProductList products={products} mode="all-products" />
                : <Heading level="h2">{t("nothing-searched")}</Heading>}
            </section>
        </main>
    )
}