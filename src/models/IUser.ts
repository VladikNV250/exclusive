export interface IUser {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    password: string,
    reviews: {
        product_id: string,
        score: number,
    }[],
}