import classes from "./BestSelling.module.scss";

import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import ProductList from "@/components/ProductList/ProductList";

import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useProduct } from "@/hooks/useProduct";
import CircleLoader from "@/UI/loaders/CircleLoader/CircleLoader";


export default function BestSelling() {
    const { t } = useTranslation();
    const { products, isLoading } = useProduct("best-selling");

    return (
        <section className={classes["best-selling"]}>
            <div className={classes["best-selling--container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle={t("this-month")} title={t("best-selling")} />
                    <Link to="/best-selling">
                        <ButtonLarge>
                            {t("view-all")}
                        </ButtonLarge>
                    </Link>
                </div>
                {isLoading ?
                    <CircleLoader loading={isLoading} /> :
                    <ProductList products={products} />}
            </div>
        </section>
    )
}