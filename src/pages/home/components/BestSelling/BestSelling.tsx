import classes from "./BestSelling.module.scss";

import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";
import ProductList from "@/components/ProductList/ProductList";

import selectFilteredProducts from "@/store/selectors/selectFilteredProducts";
import { useAppSelector } from "@/hooks/redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";


export default function BestSelling() {
    const { t } = useTranslation();
    const products = useAppSelector(state => selectFilteredProducts(state, "best-selling"));

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
                <ProductList products={products}/>
            </div>
        </section>
    )
}