import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import classes from "./InputInfoBox.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: HTMLInputTypeAttribute;
    inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export default function InputInfoBox({type = "text", ...inputProps}: Props) {
    return (
        <input 
            type={type}
            className={classes["info-box"]}
            {...inputProps}
        />
    )
}