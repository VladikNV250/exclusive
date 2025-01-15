import classes from "./RelatedProducts.module.scss";
import { useTranslation } from "react-i18next";
import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import ProductList from "@/components/ProductList";
import { useProduct } from "@/hooks/useProduct";
import CircleLoader from "@/UI/loaders/CircleLoader/CircleLoader";

interface Props {
    tag: string;
}

export default function RelatedProducts({ tag }: Props) {
    const { t } = useTranslation();
    const { products, isLoading } = useProduct(tag);

    return (
        <div className={classes["product-list-container"]}>
            <SectionHeader subtitle={t("related-item")} />
            {isLoading ?
                <CircleLoader loading={isLoading} /> :
                <ProductList products={products} />}
        </div>
    )
}