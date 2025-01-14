import { IProduct } from "@/models/IProduct";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userAPI } from "@/api/UserAPI";
import { IUser } from "@/models/IUser";
import { currencyAPI } from "@/api/CurrencyAPI";

export const fetchAllProducts = createAsyncThunk(
    'product/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IProduct[]>("http://192.168.1.3:3000/products");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(`Couldn't load goods \n ${e}`);
        }
    }
);

export const fetchProductByName = createAsyncThunk(
    'product/fetchByName',
    async (name: IProduct["name"], thunkAPI) => {
        try {
            if (name) {
                const response = await axios.get<IProduct[]>(`http://192.168.1.3:3000/products?name=${name}`);
                return response.data;

            }
            return [];
        } catch (e) {
            return thunkAPI.rejectWithValue(`Couldn't search a product ${e}`);
        }
    }
);

export const editProduct = createAsyncThunk(
    'product/editProduct',
    async (product: IProduct, thunkAPI) => {
        try {
            const response = await axios.put<IProduct>(`http://192.168.1.3:3000/products/${product.id}`, product);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(`Couldn't edit a product \n ${e}`);
        }
    }
)

export const getExchangeRate = createAsyncThunk(
    'exchange-rate/getRate',
    async (_, thunkAPI) => {
        try {
            const data = await currencyAPI.fetchExchangeRate();
            return data;
        } catch(e) {
            return thunkAPI.rejectWithValue(`Couldn't load current exchange rate \n ${e}`);
        }
    }
);

export const createUser = createAsyncThunk(
    'user/createUser',
    async (user: IUser, thunkAPI) => {
        try {
            const data = await userAPI.createUser(user);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(`Couldn't create new account \n ${e}`);
        }
    }
);

export const editUser = createAsyncThunk(
    'user/editUser',
    async (user: IUser, thunkAPI) => {
        try {
            if (user.id) {
                const data = await userAPI.editUser(user, user.id);
                return data;    
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(`Couldn't handle an operation \n ${e}`);
        }
    }
)

export const fetchUserByEmail = createAsyncThunk(
    'user/fetchByEmail',
    async (email: string, thunkAPI) => {
        try {
            const data = await userAPI.fetchByEmail(email);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(`Couldn't handle an operation \n ${e}`);
        }
    }
)

export const fetchUserById = createAsyncThunk(
    'user/fetchById',
    async (id: string, thunkAPI) => {
        try {
            const data = await userAPI.fetchById(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(`Couldn't handle an operation \n ${e}`);
        }
    }
)