export function validateEmailPhone(emailPhone: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (emailRegex.test(emailPhone)) return true;
    if (phoneRegex.test(emailPhone)) return true;
    return false;
}