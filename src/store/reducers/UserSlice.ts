import { IUser } from "@/models/IUser";
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { createUser, editUser, fetchUserByEmail, fetchUserById } from "./ActionCreators";

interface UserState {
    user: IUser | null,
    isAuthorized: boolean,
    isLoading: boolean,
    error: SerializedError | null,
}

const initialState: UserState = {
    user: null,
    isAuthorized: false,
    isLoading: false,
    error: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuthorized = true;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthorized = false;
            localStorage.removeItem("user");
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.isLoading = false;
                state.isAuthorized = true;
                state.error = {};
                state.user = action.payload;
                localStorage.setItem("user", action.payload.id ?? "");
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthorized = false;
                state.error = action.payload as SerializedError;
                state.user = null;
            })
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isAuthorized = false;
                state.error = {};
                state.user = null;
            })
            .addCase(editUser.fulfilled, (state, action: PayloadAction<IUser | undefined>) => {
                state.isLoading = false;
                state.isAuthorized = true;
                state.error = {};
                state.user = action.payload ?? null;
            })
            .addCase(editUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as SerializedError;
            })
            .addCase(editUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserByEmail.fulfilled, (state) => {
                state.isLoading = false;
                state.error = {};
            })
            .addCase(fetchUserByEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as SerializedError;
            })
            .addCase(fetchUserByEmail.pending, (state) => {
                state.isLoading = true;
                state.error = {};
            })
            .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
                state.isAuthorized = true;
                state.error = {};
                state.isLoading = false;
            })
    }
});

export default userSlice.reducer;