import { goodsAPI } from "@/api/GoodsAPI";
import { IProduct } from "@/models/IProduct";
import { useEffect, useState } from "react";

export function useProduct(tag: string) {
    const [products, setProduct] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const response = await goodsAPI.fetchProduct({
                    "tags[0]": tag || null,
                });
    
                if (response) {
                    setProduct(response);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false)
            }
                       
        })()

        return () => setProduct([]);
    }, [tag])

    return { products, isLoading }
}