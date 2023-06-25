import { configureStore } from '@reduxjs/toolkit';
import appReducer from './features/app-slice';
import driversReducer from './features/drivers-slice';
import seasonsSlice from './features/seasons-slice';

export const store = configureStore({
    reducer: {
        appState: appReducer,
        driversState: driversReducer,
        seasonsState: seasonsSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
