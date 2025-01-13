import classes from "./AddToWishlist.module.scss";
import Heart from "@/assets/icons/heart-small.svg";
import Trash from "@/assets/icons/trash.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { IProduct } from "@/models/IProduct";
import { wishlistSlice } from "@/store/reducers/WishlistSlice";

interface Props {
    id: IProduct["id"];
}

export default function AddToWishlist({id}: Props) {
    const {productIDs} = useAppSelector(state => state.wishlistReducer);
    const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;
    const dispatch = useAppDispatch();
    
    const inWishlist = productIDs.includes(id);

    function handleClick() {
        if (inWishlist) 
            dispatch(removeFromWishlist(id));
        else 
            dispatch(addToWishlist(id));
    }

    return (
        <button className={classes["button"]} onClick={handleClick}>
            <div className={classes["icons-container"]}>
                <Heart 
                    width={32} height={32} 
                    className={inWishlist ? classes["heart__removed"] : classes["heart"]} 
                />
                <Trash 
                    width={32} height={32} 
                    className={inWishlist ? classes["trash"] : classes["trash__removed"]} 
                />
            </div>
        </button>
    )
}