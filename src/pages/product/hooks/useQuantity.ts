import { useState } from "react";

export default function useQuantity(number: number = 1) {
    const [quantity, setQuantity] = useState(number);

    const increment = () => {setQuantity(quantity => quantity + 1)};
    const decrement = () => {setQuantity(quantity => quantity - 1)};

    return {quantity, increment, decrement};
}