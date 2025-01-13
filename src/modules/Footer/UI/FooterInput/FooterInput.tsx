import { useTranslation } from "react-i18next";
import classes from "./FooterInput.module.scss";
import SendIcon from "@/assets/icons/send.svg?react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  colorStyle?: "white" | "black",
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function FooterInput({className = "", colorStyle = "black", ...inputProps}: Props) {
    const { t } = useTranslation();
    return (
        <div className={`${className} ${classes["input-email--container"]}`}>
            <input 
                type="email" 
                className={classes[`input-email__${colorStyle}`]}
                placeholder={t("placeholder-footer-email")}
                {...inputProps}
            />
            <SendIcon className={classes[`icon__${colorStyle}`]} width={24} height={24} />
        </div>
    )
}