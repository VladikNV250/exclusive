import classes from './TotalItem.module.scss';
import formatPrice from '@/helpers/formatPrice';
import { useTranslation } from 'react-i18next';
// import { useAppSelector } from '@/hooks/redux';
// import selectExchangeRate from '@/store/selectors/selectExchangeRate';

interface Props {
    order: string,
    summary: number,
}

export function TotalItem({order, summary}: Props) {
    const { t, i18n } = useTranslation();
    // const currentExchangeRate = useAppSelector(state => selectExchangeRate(state, i18n.language))

    return (
        <p className={classes["item"]}>
            <span>{order}</span>
            {/* <span>{summary > 0 ? formatPrice(summary * currentExchangeRate) : t("free")}</span> */}
        </p>
    )
}