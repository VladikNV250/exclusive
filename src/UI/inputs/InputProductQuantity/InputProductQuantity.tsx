import classes from "./InputProductQuantity.module.scss";
import Plus from "@/assets/icons/plus.svg?react";
import Minus from "@/assets/icons/minus.svg?react";

interface Props {
    quantity: number;
    increment: () => void;
    decrement: () => void;
}

export default function InputProductQuantity({quantity, decrement, increment}: Props) {
    return (
        <div className={classes["input-container"]}>
            <button 
                className={classes["input-button"]}
                onClick={() => decrement()}
            >
                <Minus width={24} height={24} />
            </button>
            <input 
                type="number"
                className={classes["input-quantity"]}
                value={quantity}
                readOnly
            />
            <button 
                className={classes["input-button"]}
                onClick={() => increment()}
            >
                <Plus width={24} height={24} />
            </button>
        </div>
    )
}