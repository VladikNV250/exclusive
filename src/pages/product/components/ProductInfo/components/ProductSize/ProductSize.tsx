import { useState } from "react";
import classes from "./ProductSize.module.scss";
import { useTranslation } from "react-i18next";
import { SizeType } from "@/models/IProduct";

interface Props {
    sizes: SizeType[];
}

export default function ProductSize({sizes}: Props) {
    const { t } = useTranslation(); 
    const [currentSize, setCurrentSize] = useState<SizeType>(sizes[0] ?? "M")

    if (sizes.length > 1) return (
        <div className={classes["sizes-container"]}>
            {<h4 className={classes["sizes-title"]}>{t("size")}:</h4>}
            <div className={classes["sizes-buttons-container"]}>
                {sizes.map((size, index) => {
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