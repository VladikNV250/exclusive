import classes from "./Sales.module.scss";

import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import { Timer } from "@/components/Timer/Timer";
import ButtonNavigation from "@/UI/buttons/ButtonNavigation/ButtonNavigation";
import ProductList from "@/components/ProductList/ProductList";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";


import useMode from "../../hooks/useMode";
import { useTranslation } from "react-i18next";
import { useProduct } from "@/hooks/useProduct";
import useSlider from "../../hooks/useSlider";
import CircleLoader from "@/UI/loaders/CircleLoader/CircleLoader";



export default function Sales() {
    const { t } = useTranslation();
    const releaseDate = new Date(2025, 0, 19);
    const { mode, changeMode } = useMode("slider")
    const { products, isLoading } = useProduct("flash-sales");
    const { translate, slideLeft, slideRight, resetSlide } = useSlider(products.length, 1200);

    return (
        <section className={classes["sales"]}>
            <div className={classes["sales-container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle={t("todays")} title={t("flash-sales")} />
                    <div className={classes["timer-wrapper"]}>
                        <Timer date={releaseDate} type="text" />
                    </div>
                    <div className={classes["button-container"]}>
                        <ButtonNavigation
                            direction="left"
                            onClick={slideLeft}
                            disabled={mode === "all-products"}
                        />
                        <ButtonNavigation
                            direction="right"
                            onClick={slideRight}
                            disabled={mode === "all-products"}
                        />
                    </div>
                </div>
                <div
                    className={classes["products-container"]}
                    style={{ transform: `translateX(${translate}px)` }}
                >
                    {isLoading ?
                        <CircleLoader loading={isLoading} /> :
                        <ProductList
                            products={products}
                            mode={mode}
                        />}
                </div>
                <ButtonLarge
                    className={classes["button-all"]}
                    onClick={() => {
                        resetSlide();
                        changeMode();
                    }}
                >
                    {mode === "all-products"
                        ? t("collapse-products")
                        : t("view-all-products")
                    }
                </ButtonLarge>
            </div>
        </section>
    )
}