import { RadioColor } from "@/components/ProductCard/components/RadioColor/RadioColor";
import classes from "./ProductColors.module.scss";
import { useTranslation } from "react-i18next";

interface Props {
    colors: string[]
}

export default function ProductColors({colors}: Props) {
    const { t } = useTranslation();

    if (colors?.length > 1) return (
        <div className={classes["colors-container"]}>
            <h4 className={classes["colors-title"]}>{t("color")}:</h4>
            <RadioColor 
                colors={colors} 
                name="product-colors"
            />
        </div>
    )
}