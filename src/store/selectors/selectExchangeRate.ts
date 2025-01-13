import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { IExchangeRate } from "@/models/IExchangeRate"

const selectExchangeRate = createSelector(
    (state: RootState) => state.exchangeRateReducer.exchangeRate, 
    (_, language: string) => language,
    (exchangeRate: IExchangeRate, language: string) => {
        switch (language) {
            case "en": return Number(exchangeRate.rates["USD"]);
            case "uk": return Number(exchangeRate.rates["UAH"]);
            case "de": return Number(exchangeRate.rates["EUR"]);
            default: return Number(exchangeRate.rates["USD"]);
        }
    }
);

export default selectExchangeRate;