import { IProduct } from "./IProduct";

export interface ICart {
    id: IProduct["id"],
    name: IProduct["name"],
    price: IProduct["price"],
    images: IProduct["images"],
    quantity: number,
}