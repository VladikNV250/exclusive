import { useState } from "react";
import MethodRadio from "./components/MethodRadio/MethodRadio";
import { PaymentMethodType, PaymentMethodRadio } from "./types/types";
import CardForm from "./components/CardForm/CardForm";
import { useTranslation } from "react-i18next";


export function PaymentMethod() {
    const { t } = useTranslation();
    const methods: PaymentMethodRadio[] = [
        {name: t("cash-on-delivery"), method: "on-delivery"},
        {name: t("bank"), method: "by-card"},
    ]
    const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>("on-delivery")

    const handleChange = (method: PaymentMethodType) => {
        setSelectedMethod(method);
    }

    return (
        <div>
            <MethodRadio 
                methods={methods} 
                selectedMethod={selectedMethod} 
                onChange={handleChange}
            />
            {selectedMethod === "by-card" &&
            <CardForm />
            }
        </div>
        
    )
}