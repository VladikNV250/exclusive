import ReviewStar from "@/components/ReviewStar/ReviewStar";
import classes from "./ProductReviewStar.module.scss";
import { CSSProperties, useEffect } from "react";
import { IProduct } from "@/models/IProduct";

interface Props {
    id: IProduct["id"],
    rating: IProduct["rating"],
    isLoading?: boolean,
}

export function ProductReviewStar({id, rating, isLoading = false}: Props) {
    const loadingMask: CSSProperties = {
        color: "transparent",
        background: "#aaa",
        width: "150px",
        height: "20px",
        padding: "0",
    }


    useEffect(() => {
        
    }, [rating])

    const getCountReview = (): number => {
        if (rating) {
            let result = 0;
            Object.values(rating).forEach(item => {
                result += item;
            })
            return result;
        }
        return 0;
    }

    const calculateAvaragePoint = (): number => {
        if (rating) {
            const countReview = getCountReview();
            let sumOfScores = 0;
    
            for (const [key, value] of Object.entries(rating)) {
                sumOfScores += Number(key) * value;
            }
    
            if (countReview > 0) return sumOfScores / countReview;
        }
        return 0;
    }

    if (isLoading) return (
        <div style={loadingMask} />
    ); else return (
        <div className={classes["stars-container"]}>
            <ReviewStar 
                point={calculateAvaragePoint()} 
                id={id}
            />
            <p className={classes["review-count"]}>
                {getCountReview() <= 0 ? null : `(${getCountReview()})`}
            </p>
        </div>
    )
}