export interface IExchangeRate {
    date: string,
    base: string,
    rates: {
        [key: string]: string,
    },
};