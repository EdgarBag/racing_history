import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDriver } from "../../interfaces/global";

interface State {
    currentDrivers: IDriver[];
    initialDriversPage: number;
    selectedDriverId: string;
}

const initialState: State = {
    currentDrivers: [],
    initialDriversPage: 0,
    selectedDriverId: ''
};

const driversSlice = createSlice({
    name: 'driversState', initialState,
    reducers: {
        setDriversAction: (state, action: PayloadAction<IDriver[]>) => {
            state.currentDrivers = action.payload;
        },
        setDriversPageAction: (state, action: PayloadAction<number>) => {
            state.initialDriversPage = action.payload;
        },
        setSelectedDriverId: (state, action: PayloadAction<string>) => {
            state.selectedDriverId = action.payload;
        }
    }


});

export const { setDriversAction, setDriversPageAction, setSelectedDriverId } = driversSlice.actions;
export default driversSlice.reducer;