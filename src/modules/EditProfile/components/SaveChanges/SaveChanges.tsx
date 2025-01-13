import { useTranslation } from "react-i18next";
import classes from "./SaveChanges.module.scss";
import ButtonLarge from "@/UI/buttons/ButtonLarge/ButtonLarge";

export default function SaveChanges() {
    const { t } = useTranslation();
    
    return (
        <div className={classes["button-wrapper"]}>
            <ButtonLarge>
                {t("save-changes")}
            </ButtonLarge>
        </div>
        
    )
}