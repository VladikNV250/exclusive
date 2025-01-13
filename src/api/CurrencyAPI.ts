import { IExchangeRate } from "@/models/IExchangeRate";
import axios from "axios";

const BASE_URL=import.meta.env.CURRENCY_BASE_URL;
const API_KEY=import.meta.env.CURRENCY_API_KEY;

export const currencyAPI = {
    fetchExchangeRate: async () => {
        const response = await axios.get<IExchangeRate>(BASE_URL, {
            params: {
                apikey: API_KEY,
            }
        });
        return response.data;
    }
}