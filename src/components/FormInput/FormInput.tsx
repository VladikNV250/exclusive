import InputInfoBox from "@/UI/inputs/InputInfoBox/InputInfoBox";
import classes from "./FormInput.module.scss";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
    type?: HTMLInputTypeAttribute;
    required?: boolean;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export default function FormInput({label = "", name = "", type = "text", required = false, ...inputProps}: Props) {

    return (
        <div className={classes["input-container"]}>
            {label &&
            <label className={classes["label"]} htmlFor={name}>
                {label}
                <span className={classes["label__required"]}>{required && " *"}</span>
            </label>
            }
            <InputInfoBox
                id={name} 
                type={type} 
                name={name} 
                {...inputProps} 
            />            
        </div>
    )
}