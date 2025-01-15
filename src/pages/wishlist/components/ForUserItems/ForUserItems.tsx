import classes from "./ForUserItems.module.scss";

import ProductList from "@/components/ProductList/ProductList";
import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";

import { useTranslation } from "react-i18next";
import { useProduct } from "@/hooks/useProduct";
import CircleLoader from "@/UI/loaders/CircleLoader/CircleLoader";

export default function ForUserItems() {
    const { t } = useTranslation();
    const {products, isLoading} = useProduct("recommendation");

    return (
        <section className={classes["just-for-you--section"]}>
            <div className={classes["just-for-you--container"]}>
                <header className={classes["just-for-you--header"]}>
                    <SectionHeader subtitle={t("just-for-you")} />
                    <ButtonOutlined>
                        {t("see-all")}
                    </ButtonOutlined>
                </header> 
                {isLoading ?
                <CircleLoader loading={isLoading} /> :
                <ProductList products={products} />}
            </div>
        </section>
    )
}