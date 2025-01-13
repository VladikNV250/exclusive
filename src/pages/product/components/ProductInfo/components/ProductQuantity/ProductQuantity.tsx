import InputProductQuantity from "@/UI/inputs/InputProductQuantity/InputProductQuantity";
import useQuantity from "../../../../hooks/useQuantity";
import { useAppDispatch } from "@/hooks/redux";
import { productSlice } from "@/store/reducers/ProductSlice";
import { useEffect } from "react";
import { IProduct } from "@/models/IProduct";

interface Props {
    id: IProduct["id"];
    defaultQuantity?: number;
}

export default function ProductQuantity({id, defaultQuantity = 1}: Props) {
    const {quantity, increment, decrement} = useQuantity(defaultQuantity);
    const dispatch = useAppDispatch();
    const {updateQuantity} = productSlice.actions; 

    const handleIncrement = () => {
        increment();
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            decrement();  
        } 
    }

    useEffect(() => {
        dispatch(updateQuantity({id, quantity}))
    }, [quantity])

    return (
        <InputProductQuantity  
            quantity={quantity}
            increment={handleIncrement}
            decrement={handleDecrement}
        />
    )
}