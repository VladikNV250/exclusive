import InputProductQuantity from "@/UI/inputs/InputProductQuantity/InputProductQuantity";

interface Props {
    quantity: number,
    handleIncrement: () => void,
    handleDecrement: () => void,
}

export default function ProductQuantity({quantity, handleDecrement, handleIncrement}: Props) {
    return (
        <InputProductQuantity  
            quantity={quantity}
            increment={handleIncrement}
            decrement={handleDecrement}
        />
    )
}