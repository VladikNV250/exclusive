import IRoute from "@/models/IRoute";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18next from "@/i18n/i18n";

interface RouteState {
    routes: IRoute[];
} 

const initialState: RouteState = {
    routes: [
        {name: i18next.t("home"), link: "/", level: 0}, // levels are the same as the indexes in the array
    ],
}

export const routeSlice = createSlice({
    name: "route",
    initialState,
    reducers: {
        addRoute: (state, action: PayloadAction<IRoute[]>) => {
            const seniorLevel = action.payload[0].level;            // from this level we erase all lower 
            const allElements = state.routes.length - seniorLevel;  // levels and insert new ones in their place

            state.routes.splice(seniorLevel, allElements, ...action.payload);
        },
        updateHome: (state) => {
            state.routes[0].name = i18next.t("home"); // without this reducer home doesn't translate :(
        }
    }
})

export default routeSlice.reducer;