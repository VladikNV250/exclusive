export type PaymentMethodRadio = {
    name: string,
    method: PaymentMethodType,
}

export type PaymentMethodType = "by-card" | "on-delivery"; 