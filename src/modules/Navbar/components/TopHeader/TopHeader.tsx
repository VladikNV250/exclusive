import Select from "@/UI/selects/Select/Select";
import classes from "./TopHeader.module.scss";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/hooks/redux";
import { routeSlice } from "@/store/reducers/RouteSlice";

export default function TopHeader() {
    const { t, i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const { updateHome } = routeSlice.actions;
    const languages = useMemo(() => [
        {value: "uk", name: "Українська"},
        {value: "en", name: "English"},
        {value: "de", name: "Deutsch"},
    ], []);
    const [selectedLanguage, setSelectedLanguage] = useState({
        value: "en", name: "English"
    });

    useEffect(() => {
        const userLanguage = navigator.language || "en";
        const langPrefix = userLanguage.substring(0, 2); // getting prefix (e.g., get "en" from "en-US", "en-AU"...)

        const language = languages.find(language => language.value === langPrefix) 
        if (language) setSelectedLanguage(language);
    }, [languages])

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage.value);
        dispatch(updateHome());
    }, [selectedLanguage, i18n, dispatch, updateHome])

    return (
        <div className={classes["top-header"]}>
            <div className={classes["top-header--container"]}>
                <div className={classes["top-header--content"]}>
                    <p className={classes["top-header--text"]}>
                        {t("summer-sale")}
                    </p>
                    <a href="/" className={classes["top-header--link"]}>
                        {t("shop-now")}
                    </a>
                </div>
                <div className={classes["select-wrapper"]}>
                    <Select 
                        options={languages} 
                        selectedOption={selectedLanguage}
                        setSelectedOption={setSelectedLanguage}
                    />
                </div>
            </div>
        </div>
    )
}