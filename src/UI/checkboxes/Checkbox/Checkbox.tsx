import { InputHTMLAttributes } from "react";
import classes from "./Checkbox.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    checked?: boolean;
    inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export default function Checkbox({ checked = false, ...inputProps }: Props) {
    return (
        <label className={classes["checkbox-container"]}> 
            <input 
                type="checkbox" 
                className={classes["checkbox-input"]} 
                defaultChecked={checked}
                {...inputProps}
            /> 
            <span className={classes["checkbox-custom"]}></span> 
        </label>
    )
}