import { ButtonHTMLAttributes } from "react";
import classes from "./ButtonNavigation.module.scss";
import ArrowRight from "@/assets/icons/arrow-right.svg?react";
import ArrowLeft from "@/assets/icons/arrow-left.svg?react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    direction?: "left" | "right";
    btnProps?: ButtonHTMLAttributes<HTMLButtonElement>
}

export default function ButtonNavigation({direction = "right", ...btnProps}: Props) {
    

    return (
        <button className={classes["button-navigation"]} {...btnProps}>
            {direction === "right"
            ? <ArrowRight className={classes["button-icon"]} width={24} height={24} />
            : <ArrowLeft className={classes["button-icon"]} width={24} height={24} />}
        </button>
    )
}