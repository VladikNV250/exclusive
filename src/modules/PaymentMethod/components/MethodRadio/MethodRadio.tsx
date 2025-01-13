import Radio from "@/UI/radio/Radio/Radio";
import classes from "./MethodRadio.module.scss";
import bkash from "@/assets/payment-methods/Bkash.png";
import visa from "@/assets/payment-methods/visa.png";
import mastercard from "@/assets/payment-methods/mastercard.png";
import nagad from "@/assets/payment-methods/nagad.png";
import { PaymentMethod, PaymentMethodRadio } from "../../types/types";

interface Props {
    methods: PaymentMethodRadio[],
    onChange: (method: PaymentMethod) => void;
    selectedMethod?: PaymentMethod,
}

export default function MethodRadio({methods, selectedMethod, onChange}: Props) {
    selectedMethod = selectedMethod ? selectedMethod : methods[0]["method"];

    return (
        <div className={classes["methods-container"]}>
            {methods.map(({name, method}, index) => 
                <div key={index} className={classes["radio-container"]}>
                    <Radio 
                        name="payment-method"
                        value={method}
                        defaultChecked={method === selectedMethod}
                        onChange={() => onChange(method)}
                    />
                    <p className={classes["radio-name"]}>
                        {name}
                    </p>
                    {method === "by-card" &&
                    <div className={classes["payments"]}>
                        <img src={bkash}      alt="Bkash"      className={classes["payment-image"]} />
                        <img src={visa}       alt="Visa"       className={classes["payment-image"]} />
                        <img src={mastercard} alt="MasterCard" className={classes["payment-image"]} />
                        <img src={nagad}      alt="Nagad"      className={classes["payment-image"]} />
                    </div>
                    }
                </div>
            )}
        </div>
    )
}