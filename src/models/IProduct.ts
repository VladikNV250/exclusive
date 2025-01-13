import { Size } from "@/types/types"

export interface IProduct {
    id: string,
    name: string,
    description: string,
    price: number,
    oldPrice?: number,
    rating?: {
        0.5?: number,
        1?:   number,
        1.5?: number,
        2?:   number,
        2.5?: number,
        3?:   number,
        3.5?: number,
        4?:   number,
        4.5?: number,
        5?:   number,
        [key: number]: number,
    }
    isNew?: boolean,
    isInStock?: boolean,
    availableColors?: string[],
    size?: Size[],
    quantity?: number,
    
    images: {
        default: string[],
        [color: string]: string[],
    },
    tags?: string[],
    category?: {
        name: string,
        href: string,
    },
}