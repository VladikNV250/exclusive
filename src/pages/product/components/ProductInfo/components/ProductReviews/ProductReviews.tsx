import { ReviewStar } from "@/components/ReviewStar/ReviewStar";
import classes from "./ProductReviews.module.scss";
import { useTranslation } from "react-i18next";
import { IProduct } from "@/models/IProduct";
import { useEffect, useRef } from "react";

interface Props {
    isInStock: boolean,
    id: IProduct["id"],
    rating: IProduct["rating"],
}

export default function ProductReviews({isInStock, id, rating}: Props) {
    const { t } = useTranslation();

    const getCountReview = () => {
        let result = 0;
        Object.values(rating).forEach(item => {
            result += item;
        })
        return result;
    }

    const calculateAvaragePoint = () => {
        const countReview = getCountReview();
        let sumOfScores = 0;

        for (const [key, value] of Object.entries(rating)) {
            sumOfScores += Number(key) * value;
        }

        if (countReview > 0) return sumOfScores / countReview;
    }

    return (
        <div className={classes["review-container"]}>
            <ReviewStar
                id={id} 
                point={calculateAvaragePoint()} 
                canSetReview={true}
            />
            <p className={classes["review-count"]}>
                {getCountReview() <= 0 ? "" : `(${getCountReview()} ${t("reviews")})`}
            </p>
            <div className={classes["vertical-line"]} />
            {isInStock
            ? 
                <p className={classes["in-stock"]}>
                    {t("in-stock")}
                </p>
            :
                <p className={classes["out-of-stock"]}>
                    {t("out-of-stock")}
                </p>
            }
        </div>
    )
}