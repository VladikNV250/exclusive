import classes from "./ProductList.module.scss";
import { ProductCard } from "../ProductCard";
import { IProduct } from "@/models/IProduct";
import { ListMode } from "./types/types";
import { useAppSelector } from "@/hooks/redux";
import CircleLoader from "@/UI/loaders/CircleLoader/CircleLoader";

interface Props {
    products: IProduct[],
    mode?: ListMode,
}

export default function ProductList({products, mode = "slider"}: Props) {
    const productsClass = mode === "slider" ? classes["product-list"] : classes["product-list__all"];
    const {isLoading, error} = useAppSelector(state => state.productReducer);

    
    return (
        <div className={productsClass}>
            {products.map(product => 
                <ProductCard
                    key            ={product.id}
                    id             ={product.id}
                    name           ={product.name}
                    price          ={product.price}
                    oldPrice       ={product.oldPrice}
                    images         ={product.images}
                    availableColors={product.availableColors}
                    isInStock      ={product.isInStock}
                    isNew          ={product.isNew}
                    rating         ={product.rating}
                />
            )}
            <CircleLoader loading={isLoading} />
            {error.message && <div>Coudn't load goods :( Let's try reload the page</div>}
        </div>
    )
}