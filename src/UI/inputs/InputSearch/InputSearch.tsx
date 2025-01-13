import { useTranslation } from "react-i18next";
import classes from "./InputSearch.module.scss";
import Search from "@/assets/icons/search.svg?react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function InputSearch({className = "", ...inputProps}: Props) {
    const { t } = useTranslation();

    return (
        <div className={`${className} ${classes["input-search--container"]}`}>
            <input 
                type="text" 
                className={classes["input-search"]}
                placeholder={t("placeholder-search")}
                {...inputProps}
            />
            <Search className={classes["icon"]} width={24} height={24} />
        </div>
    )
}