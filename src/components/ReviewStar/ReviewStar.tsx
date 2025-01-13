import { useEffect, useRef, useState } from "react";
import classes from "./ReviewStar.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { IProduct, NumericKeys } from "@/models/IProduct";
import { editProduct, editUser } from "@/store/reducers/ActionCreators";
import selectByIdProducts from "@/store/selectors/selectByIdProducts";
import { IUser } from "@/models/IUser";
import { produce } from "immer";

interface Props {
    id: IProduct["id"],
    point: number,
    canSetReview?: boolean,
}

export default function ReviewStar({id, point, canSetReview = false}: Props) {
    const starsRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const product = useAppSelector(state => selectByIdProducts(state, id));
    const {user} = useAppSelector(state => state.userReducer);
    const [canReview, setCanReview] = useState(canSetReview);

    const fullInStar = (pointOfStar: number) => {
        if (point) {
            if (pointOfStar <= point) return classes["star__full"];
            else if (pointOfStar === Math.round(point)) return classes["star__half"];
            else if (pointOfStar === Number((point).toFixed(1)) + 0.5) return classes["star__half"];
        }
        return classes["star"];
    }

    const hoverStar = (pointOfStar: number) => {
        if (user && canReview && starsRef.current) {
            const starArray = Array.from(starsRef.current.children);
            starArray.forEach((star: Element) => {
                const halfStarValue = Number(Array.from(star.children)[0].getAttribute("data-value"));
                const fullStarValue = Number(Array.from(star.children)[1].getAttribute("data-value")); 
    
                if (fullStarValue <= pointOfStar) 
                    star.setAttribute("class", classes["star__full"]);
                else if (halfStarValue <= pointOfStar) 
                    star.setAttribute("class", classes["star__half"]);
                else 
                    star.setAttribute("class", classes["star"]);
            })
        }
    }

    const leaveHover = () => {
        if (user && starsRef.current) {
            const starArray = Array.from(starsRef.current.children );
            starArray.forEach((star: Element) => {
                const starValue = Number(star.getAttribute("data-value"))
                star.setAttribute("class", fullInStar(starValue));
            })
        }
    }

    const setStars = (score: NumericKeys) => {
        if (user && canReview && product) {
            const newReview = {
                product_id: id,
                score,
            }
            const newUser: IUser = {
                ...user,
                reviews: [
                    ...user.reviews,
                    newReview,
                ]
            }
            const newProduct: IProduct = produce(product, draft => {
                if (draft) {
                    if (!draft.rating) draft.rating = {};
                    
                    draft.rating[score] = (draft.rating[score] ?? 0) + 1;

                    if (!draft.images.default) {
                        draft.images.default = []
                    }

                    if (!draft.category) {
                        draft.category = {name: "", href: ""};
                    }
                }

            });

            dispatch(editUser(newUser));
            dispatch(editProduct(newProduct));
        }
    }

    useEffect(() => {
        const hasAlreadyScore = user?.reviews.find(review => review.product_id === id);
        if (hasAlreadyScore) setCanReview(false);
    }, [user, id])

    return (
        <div className={classes["stars"]} ref={starsRef}>
            {Array.from({length: 5}).map((_, index) => (
                <svg 
                    data-value={index + 1} 
                    key={index} 
                    width="20" height="20" 
                    viewBox="0 0 20 20"  
                    className={fullInStar(index + 1)} 
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        data-value={index + 0.5} 
                        onMouseEnter={() => hoverStar(index + 0.5)} 
                        onMouseLeave={leaveHover} 
                        onClick={() => setStars(index + 0.5 as NumericKeys)}
                        d="M8 2.00004C7.76086 1.9982 7.52612 2.06715 7.32305 2.19889C7.11998 2.33062 6.95691 2.51973 6.85278 2.74426L5.07515 6.50207L1.09747 7.10446C0.860881 7.14001 0.638562 7.24394 0.455694 7.40448C0.272826 7.56502 0.136715 7.77576 0.0627761 8.01282C-0.0111626 8.24988 -0.0199749 8.5038 0.0373377 8.74581C0.0946502 8.98783 0.215797 9.20827 0.387059 9.38218L3.26711 12.3073L2.5871 16.4389C2.54665 16.6843 2.57283 16.9367 2.66268 17.1674C2.75253 17.3981 2.90246 17.598 3.09554 17.7445C3.28861 17.891 3.51714 17.9783 3.75527 17.9964C3.99341 18.0146 4.23168 17.9629 4.44313 17.8473L8 15.8966V2.00004Z" 
                        fill="currentColor"
                        className={user && canReview ? classes["can-review"] : "" }
                    />
                    <path 
                        data-value={index + 1} 
                        onMouseEnter={() => hoverStar(index + 1)} 
                        onMouseLeave={leaveHover} 
                        onClick={() => setStars(index + 1 as NumericKeys)}
                        d="M7.89999 2.00004C8.13914 1.9982 8.37388 2.06715 8.57695 2.19889C8.78002 2.33062 8.94308 2.51973 9.04722 2.74426L10.8248 6.50207L14.8025 7.10446C15.0391 7.14001 15.2614 7.24394 15.4443 7.40448C15.6272 7.56502 15.7633 7.77576 15.8372 8.01282C15.9112 8.24988 15.92 8.5038 15.8627 8.74581C15.8053 8.98783 15.6842 9.20827 15.5129 9.38218L12.6329 12.3073L13.3129 16.4389C13.3533 16.6843 13.3272 16.9367 13.2373 17.1674C13.1475 17.3981 12.9975 17.598 12.8045 17.7445C12.6114 17.891 12.3829 17.9783 12.1447 17.9964C11.9066 18.0146 11.6683 17.9629 11.4569 17.8473L7.89999 15.8966V2.00004Z" 
                        fill="currentColor" fillOpacity="0.25"
                        className={user && canReview ? classes["can-review"] : "" }
                    />
                </svg>
            ))}
        </div>
    )
}