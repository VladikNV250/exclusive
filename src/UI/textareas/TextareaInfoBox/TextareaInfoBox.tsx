import { TextareaHTMLAttributes } from "react";
import classes from "./TextareaInfoBox.module.scss";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    otherProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export default function TextareaInfoBox({...otherProps}: Props) {
    return (
        <textarea 
            className={classes["info-box"]}
            {...otherProps}
        />
    )
}