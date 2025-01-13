import classes from "./ButtonQuickView.module.scss";
import ButtonCircle from "@/UI/buttons/ButtonCircle/ButtonCircle";
import QuickViewIcon from "@/assets/icons/quick-view.svg?react";
import { useState } from "react";
import QuickView from "../QuickView/QuickView";
import { useAppSelector } from "@/hooks/redux";
import selectByIdProducts from "@/store/selectors/selectByIdProducts";
import { IProduct } from "@/models/IProduct";

interface Props {
    id: IProduct["id"];
}

export default function ButtonQuickView({id}: Props) {
    const [isOpenQuickView, setIsOpenQuickView] = useState(false);
    const openQuickView = () => { setIsOpenQuickView(!isOpenQuickView); }
    const product = useAppSelector(state => selectByIdProducts(state, id))

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