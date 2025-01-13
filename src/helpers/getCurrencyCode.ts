export default function getCurrencyCode(language: string): string {
    switch (language) {
        case "en": return "USD";
        case "uk": return "UAH";
        case "de": return "EUR";
        default:   return "USD";
    }
}