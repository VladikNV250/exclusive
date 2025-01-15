import classes from "./AddToWishlist.module.scss";
import Heart from "@/assets/icons/heart-small.svg?react";
import Trash from "@/assets/icons/trash.svg?react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { IProduct } from "@/models/IProduct";
import { wishlistSlice } from "@/store/reducers/WishlistSlice";

interface Props {
    product: IProduct;
}

export default function AddToWishlist({product}: Props) {
    const {products} = useAppSelector(state => state.wishlistReducer);
    const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;
    const dispatch = useAppDispatch();
    
    const inWishlist = products.find(wishProduct => wishProduct.id === product.id);

    function handleClick() {
        if (inWishlist) 
            dispatch(removeFromWishlist(product.id));
        else 
            dispatch(addToWishlist(product));
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