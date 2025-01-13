import Checkbox from '@/UI/checkboxes/Checkbox/Checkbox';
import classes from './SaveCheckbox.module.scss';
import { useTranslation } from 'react-i18next';

export default function SaveCheckbox() {
    const { t } = useTranslation();

    return (
        <div className={classes["checkbox-wrapper"]}>
            <Checkbox name="save-info" checked={true}  />
            <p className={classes["save-info"]}>
                {t("save-details")}
            </p>
        </div>
    )
}