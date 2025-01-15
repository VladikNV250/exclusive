import { IProduct } from "@/models/IProduct";
import axios from "axios";

export const goodsAPI = {
    fetchAllProducts: async () => {
        try {
            const response = await axios.get<IProduct[]>("http://192.168.1.3:3000/products");
            return response.data;
        } catch (e) {
            return e;
        }
    },
    fetchProductByName: async (name: IProduct["name"]) => {
        try {
            const response = await axios.get<IProduct[]>(`http://192.168.1.3:3000/products`, {
                params: {
                    name
                }
            });
            return response.data;
        } catch (e) {
            return e;
        }
    },
    fetchProductFiltered: async (filter: {[key: string]: string}) => {
        try {
            console.log(filter);
            const response = await axios.get<IProduct[]>(`http://192.168.1.3:3000/products`, {
                params: {
                    ...filter
                }
            });
            return response.data;
        } catch (e) {
            return e;
        }
    },
    editProduct: async (product: IProduct) => {
        try {
            const response = await axios.put<IProduct>(`http://192.168.1.3:3000/products/${product.id}`, product);
            return response.data;
        } catch (e) {
            return e;
        }
    },
}