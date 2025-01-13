import "i18next";
import i18next from "i18next";
import getCurrencyCode from "./getCurrencyCode";

export default function formatPrice(price: number, maximumFractionDigits: number = 0) {
    const currency = getCurrencyCode(i18next.language);
    const numberFormat = Intl.NumberFormat(i18next.language, {
        style: "currency",
        currency: currency,
        useGrouping: false,
        maximumFractionDigits,
    })
    return numberFormat.format(price);
}