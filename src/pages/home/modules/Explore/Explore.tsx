import classes from "./Explore.module.scss";

import SectionHeader from "@/UI/headers/SectionHeader/SectionHeader";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";

import ButtonNavigation from "@/UI/buttons/ButtonNavigation/ButtonNavigation";
import ProductList from "@/components/ProductList/ProductList";


import { useAppSelector } from "@/hooks/redux";
import useSlider from "../../hooks/useSlider";
import useMode from "../../hooks/useMode";
import { useTranslation } from "react-i18next";

export default function Explore() {
    const { t } = useTranslation();
    const products = useAppSelector(state => state.productReducer.products)
    const {translate, slideLeft, slideRight, resetSlide} = useSlider(products.length, 1200);
    const {mode, changeMode} = useMode("all-products");

    return (
        <section className={classes["explore"]}>
            <div className={classes["explore-container"]}>
                <div className={classes["header-container"]}>
                    <SectionHeader subtitle={t("our-products")} title={t("explore")} />
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
                    className={mode === "slider" ? classes["products-slider"]: classes["products-container"]} 
                    style={{transform: `translateX(${translate}px)`}}
                >
                    <ProductList 
                        products={products} 
                        mode={mode}
                    />
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