import classes from "./ButtonQuickView.module.scss";
import ButtonCircle from "@/UI/buttons/ButtonCircle/ButtonCircle";
import QuickViewIcon from "@/assets/icons/quick-view.svg?react";
import { useState } from "react";
import QuickView from "../QuickView/QuickView";
import { IProduct } from "@/models/IProduct";

interface Props {
    product: IProduct;
}

export default function ButtonQuickView({product}: Props) {
    const [isOpenQuickView, setIsOpenQuickView] = useState(false);
    const openQuickView = () => { setIsOpenQuickView(!isOpenQuickView); }

    if (product) return (
        <>
            <QuickView 
                isOpen={isOpenQuickView} 
                setIsOpen={setIsOpenQuickView} 
                product={product}
            />
            <ButtonCircle onClick={openQuickView}>
                <QuickViewIcon width={24} height={24} className={classes["view"]} />            
            </ButtonCircle>
        </>
        
    )   
}