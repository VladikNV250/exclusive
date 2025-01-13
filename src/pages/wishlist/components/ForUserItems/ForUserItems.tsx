import classes from "./ForUserItems.module.scss";

import ProductList from "@/components/ProductList/ProductList";
import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";

import selectFilteredProducts from "@/store/selectors/selectFilteredProducts";
import { useAppSelector } from "@/hooks/redux";
import { useTranslation } from "react-i18next";

export default function ForUserItems() {
    const { t } = useTranslation();
    const products = useAppSelector(state => selectFilteredProducts(state, "recommendation"))

    return (
        <section className={classes["just-for-you--section"]}>
            <div className={classes["just-for-you--container"]}>
                <header className={classes["just-for-you--header"]}>
                    <SectionHeader subtitle={t("just-for-you")} />
                    <ButtonOutlined>
                        {t("see-all")}
                    </ButtonOutlined>
                </header> 
                <ProductList products={products} />
            </div>
        </section>
    )
}