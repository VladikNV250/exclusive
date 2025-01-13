import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import classes from "./InputAuth.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    otherProps?: InputHTMLAttributes<HTMLInputElement>;
}

export default function InputAuth({placeholder = "Enter text", type = "text", ...otherProps}: Props) {
    return (
        <input 
            type={type} 
            className={classes["input-auth"]}
            placeholder={placeholder}
            {...otherProps}
        />
    )
}