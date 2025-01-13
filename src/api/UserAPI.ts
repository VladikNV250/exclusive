import { IUser } from "@/models/IUser";
import axios from "axios"

axios.defaults.baseURL = "http://192.168.1.3:3000";
export const userAPI = {
    fetchByEmail: async (email: string) => {
        const response = await axios.get<IUser[]>(`/users?email=${email}`);
        return response.data[0];
    },
    fetchById: async (id: string) => {
        const response = await axios.get<IUser>(`/users/${id}`);
        return response.data;
    },
    createUser: async (user: IUser) => {
        const response = await axios.post<IUser>(`/users`, user);
        return response.data;
    },
    editUser: async (user: IUser, id: string) => {
        const response = await axios.put<IUser>(`/users/${id}`, user);
        return response.data;
    },
}