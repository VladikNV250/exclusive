export default function getDiscount(price: number, oldPrice?: number): string {
    if (price === 0) return "0%";

    const numberFormat = new Intl.NumberFormat("en", {
        minimumFractionDigits: 0,
        style: "percent"
    })
    if (oldPrice) return numberFormat.format(-(100 - ((price * 100) / oldPrice)) / 100);
}