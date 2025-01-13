import classes from "./InputQuantity.module.scss";
import Chevron from "@/assets/icons/drop-down.svg?react";

interface Props {
    quantity?: number;
    changeQuantity: (quantity: number) => void;
}

export default function InputQuantity({quantity = 1, changeQuantity}: Props) {
    const numberFormat = new Intl.NumberFormat("en", {
        minimumIntegerDigits: 2,
    })

    const increment = () => {
        changeQuantity(quantity + 1);
    } 

    const decrement = () => {
        if (quantity > 1)
            changeQuantity(quantity - 1);
    }

    return (
        <div className={classes["input-container"]}>
            <input 
                type="number" 
                className={classes["input-quantity"]}    
                value={numberFormat.format(quantity)}
                readOnly
            />
            <div className={classes["spin-buttons--container"]}>
                <button className={classes["increment"]} onClick={increment}>
                    <Chevron width={16} height={16} />
                </button>
                <button className={classes["decrement"]} onClick={decrement}>
                    <Chevron width={16} height={16} />
                </button>
            </div>
        </div>
    )
}