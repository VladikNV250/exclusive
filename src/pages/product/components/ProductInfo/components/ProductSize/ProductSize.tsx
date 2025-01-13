import { useState } from "react";
import classes from "./ProductSize.module.scss";
import { useTranslation } from "react-i18next";
import { Size } from "@/types/types";


interface Props {
    sizes: Size[];
    currentSize?: Size;
}

export default function ProductSize({sizes}: Props) {
    const { t } = useTranslation(); 
    const [currentSize, setCurrentSize] = useState<Size>("M")
    if (sizes && !sizes.includes(currentSize)) setCurrentSize(sizes[0]);

    if (sizes?.length > 1) return (
        <div className={classes["sizes-container"]}>
            {sizes && <h4 className={classes["sizes-title"]}>{t("size")}:</h4>}
            <div className={classes["sizes-buttons-container"]}>
                {sizes && sizes.map((size, index) => {
                    const buttonClass = size === currentSize ? "sizes-button__current" : "sizes-button"
                    return (
                        <button 
                            key={index}
                            className={classes[buttonClass]}
                            onClick={() => setCurrentSize(size)}
                        >
                            {size}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}