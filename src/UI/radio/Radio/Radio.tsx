import { InputHTMLAttributes } from "react";
import classes from "./Radio.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export default function Radio({name, ...inputProps}: Props) {
    return (
        <input 
            type="radio" 
            className={classes["radio"]}
            name={name + "-customRadio"}
            {...inputProps}
        />
    )
}