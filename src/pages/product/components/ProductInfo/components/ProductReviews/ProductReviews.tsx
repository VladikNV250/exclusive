import ReviewStar from "@/components/ReviewStar/ReviewStar";
import classes from "./ProductReviews.module.scss";
import { useTranslation } from "react-i18next";
import { IProduct } from "@/models/IProduct";

interface Props {
    isInStock?: boolean,
    id: IProduct["id"],
    rating: IProduct["rating"],
}

export default function ProductReviews({isInStock = false, id, rating}: Props) {
    const { t } = useTranslation();

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