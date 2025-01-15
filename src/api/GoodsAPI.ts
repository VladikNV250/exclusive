import { IProduct } from "@/models/IProduct";
import axios from "axios";

export const goodsAPI = {
    fetchAllProducts: async () => {
        try {
            const response = await axios.get<IProduct[]>("https://json-server-liard-two.vercel.app/products");
            return response.data;
        } catch (e) {
            return e;
        }
    },
    fetchProductByName: async (name: IProduct["name"]) => {
        try {
            const response = await axios.get<IProduct[]>(`https://json-server-liard-two.vercel.app/products`, {
                params: {
                    name
                }
            });
            return response.data
        } catch (e) {
            console.error(e);
        }
    },
    fetchProduct: async (filter?: {[key: string]: string | number | boolean | null }) => {
        try {
            const response = await axios.get<IProduct[]>(`https://json-server-liard-two.vercel.app/products?`, {
                params: {
                    ...filter
                }
            });
            return response.data
        } catch (e) {
            console.error(e);
        }
    },
    editProduct: async (product: IProduct) => {
        try {
            const response = await axios.put<IProduct>(`https://json-server-liard-two.vercel.app/${product.id}`, product);
            return response.data;
        } catch (e) {
            console.error(e);
        }
    },
}
