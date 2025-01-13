import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import FormInput from "@/components/FormInput/FormInput";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name?: string;
    type?: HTMLInputTypeAttribute;
    required?: boolean;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export default function DetailsFormInput({label, name, type, required, ...inputProps}: Props) {

    return (
        <FormInput 
            label={label}
            name={name}
            type={type}
            required={required}
            {...inputProps}
        />
    )
}