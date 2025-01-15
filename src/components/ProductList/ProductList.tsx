import classes from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { ListMode } from "./types/types";
import { IProduct } from "@/models/IProduct";

interface Props {
    products: IProduct[],
    mode?: ListMode,
}

export default function ProductList({products, mode = "slider"}: Props) {
    
    const productsClass = mode === "slider" ? classes["product-list"] : classes["product-list__all"];
    
    return (
        <div className={productsClass}>
            
            {products?.map(product => 
                <ProductCard
                    product={product}
                    key={product.id}
                />
            )}
        </div>
    )
}