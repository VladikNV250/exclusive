import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "@/api/UserAPI";
import { IUser } from "@/models/IUser";
import { currencyAPI } from "@/api/CurrencyAPI";

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