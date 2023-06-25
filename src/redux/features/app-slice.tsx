import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface State {
    isLoading: boolean;
}

const initialState: State = {
    isLoading: false,
};

const appSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

    }
});

export const { setLoading, } = appSlice.actions;
export default appSlice.reducer;