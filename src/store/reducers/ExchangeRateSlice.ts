import { IExchangeRate } from "@/models/IExchangeRate";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getExchangeRate } from "./ActionCreators";

interface ExchangeRateState {
    exchangeRate: IExchangeRate,
    isLoading: boolean,
}

const initialState: ExchangeRateState = {
    exchangeRate: {
        date: "2025-01-06 22:27:00+00",
        base: "USD",
        rates: {
            "UAH": "42.1959",
            "EUR": "0.96",
            "USD": "1",
        }
    },
    isLoading: false,
}

export const exchangeRateSlice = createSlice({
    name: "exchange-rate",
    initialState,
    reducers: {
        setExchangeRate: (state, action: PayloadAction<IExchangeRate>) => {
            state.exchangeRate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getExchangeRate.fulfilled, (state, action: PayloadAction<IExchangeRate>) => {
                state.exchangeRate = action.payload;
                state.isLoading = false;
                localStorage.setItem("exchange-rate", JSON.stringify(action.payload));
            })
            .addCase(getExchangeRate.rejected, (state, action) => {
                state.isLoading = false;
                console.error(action.payload);
            })
            .addCase(getExchangeRate.pending, (state) => {
                state.isLoading = true;
            })
    }
})

export default exchangeRateSlice.reducer;