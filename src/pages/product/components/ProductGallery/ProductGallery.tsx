import { useEffect, useRef, useState } from "react";
import classes from "./ProductGallery.module.scss";

interface Props {
    images: string[],
}

export default function ProductGallery({images}: Props) {
    const [currentImage, setCurrentImage] = useState(images[0]); 
    const topIndex = useRef(0);
    const bottomIndex = useRef(3);
    const translate = useRef(0);

    const handleClick = (index: number, image: string) => {
        setCurrentImage(image);
        if (index === topIndex.current) {
            if (topIndex.current > 0) {
                translate.current = translate.current + 154;
                topIndex.current = index - 1;
                bottomIndex.current = bottomIndex.current - 1;
            }
        } else if (index === bottomIndex.current) {
            const lastIndex = images.length - 1
            if (bottomIndex.current < lastIndex) {
                translate.current = translate.current - 154;
                bottomIndex.current = index + 1;
                topIndex.current = topIndex.current + 1;
            }
        }
    }

    useEffect(() => {
        setCurrentImage(images[0]);
    }, [images])

    return (
        <div className={classes["gallery-container"]}>
            {images.length > 1 &&
            <div className={classes["slider-view"]}>
                <div 
                    className={classes["image-slider"]} 
                    style={{transform: `translateY(${translate.current}px)`}}
                >
                    {images.map((image, index) => {
                        return (
                            <div 
                                key={index} 
                                className={classes["other-image-container"]}
                                onClick={() => handleClick(index, image)}
                            >
                                <img src={image} alt="" className={classes["other-image"]} />
                            </div>        
                        )
                    })}
                </div>
            </div>}
            <div className={classes["main-image-container"]}>
                <img src={currentImage} alt="" className={classes["main-image"]} />
            </div>
        </div>
    )
}