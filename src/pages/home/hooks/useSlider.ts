import { useState } from "react";

export default function useSlider(productsLength: number, offset: number) {
    const [translate, setTranslate] = useState<number>(0);

    const slideLeft = () => { 
        if (translate < 0)
            setTranslate(translate => translate + offset)
    }
    const slideRight = () => {
        if (translate > ((productsLength / 4) - 1) * -offset)
            setTranslate(translate => translate - offset);
    }

    const resetSlide = () => {
        setTranslate(0);
    }

    return {translate, slideLeft, slideRight, resetSlide};
}