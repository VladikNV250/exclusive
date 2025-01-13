export type NumericKeys = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
export type SizeType = "XS" | "S" | "M" | "X" | "XL" | "XXL" | "XXXL"; 
export interface IProduct {
    id: string,
    name: string,
    description: string,
    price: number,
    oldPrice?: number,
    rating?: {
        [key in NumericKeys]?: number;
    }
    isNew?: boolean,
    isInStock?: boolean,
    availableColors?: string[],
    size?: SizeType[],
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