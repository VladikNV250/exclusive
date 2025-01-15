import { useState } from "react";

export default function useQuantity(number: number = 1, maxQuantity: number = 1) {
    const [quantity, setQuantity] = useState(number);

    const increment = () => {
        if (quantity < maxQuantity)
            setQuantity(quantity => quantity + 1)
    };
    const decrement = () => {
        if (quantity > 1)
            setQuantity(quantity => quantity - 1)
    };

    return {quantity, increment, decrement};
}