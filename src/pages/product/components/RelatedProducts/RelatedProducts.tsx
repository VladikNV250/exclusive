import classes from "./RelatedProducts.module.scss";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks/redux";
import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import ProductList from "@/components/ProductList";

interface Props {
    tags: string[],
    id: string,
}

export default function RelatedProducts({tags, id}: Props) {
    const { t } = useTranslation();
    const {products} = useAppSelector(state => state.productReducer);

    const uniqueIDs = new Set();
    const relatedProducts = tags.map(tag => products.filter(product => { // filter products with the same id
        if (id === product.id) return false;
        if (product.tags.includes(tag)) {
            if (!uniqueIDs.has(product.id)) {
                uniqueIDs.add(product.id);
                return true;
            } 
        } 
        return false;
    })).flat();

    return (
        <div className={classes["product-list-container"]}>
            <SectionHeader subtitle={t("related-item")} />
            <ProductList products={relatedProducts} />
        </div>
    )   
}