import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISeason } from "../../interfaces/global";


interface State {
    initialSeasonsPage: number;
    currentSeasons: ISeason[];
    selectedSeason: number | null;
}

const initialState: State = {
    initialSeasonsPage: 0,
    currentSeasons: [],
    selectedSeason: null
};


const seasonsSlice = createSlice({
    name: 'seasonsState',
    initialState,
    reducers: {
        setInitialSeasonsPage: (state, action: PayloadAction<number>) => {
            state.initialSeasonsPage = action.payload;
        },
        setSeasonsAction: (state, action: PayloadAction<ISeason[]>) => {
            state.currentSeasons = action.payload;
        },
        setSelectedSeason: (state, action: PayloadAction<number>) => {
            state.selectedSeason = action.payload;
        }

    }
});


export const { setInitialSeasonsPage, setSeasonsAction, setSelectedSeason } = seasonsSlice.actions;
export default seasonsSlice.reducer;