import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import FormInput from "@/components/FormInput/FormInput";
import classes from "./ProfileFormInput.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
    type?: HTMLInputTypeAttribute;
    required?: boolean;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export default function ProfileFormInput({label, name, type, required, ...inputProps}: Props) {

    return (
        <div className={classes["input-wrapper"]}>
            <FormInput 
                label={label}
                name={name}
                type={type}
                required={required}
                {...inputProps}
            />
        </div>
        
    )
}