import { configureStore } from '@reduxjs/toolkit';
import currentComponentReducer from './slices/currentComponentSlice';
import expandReducer from './slices/expandSlice';
import vehicleReducer from './slices/vehicleSlice';

export const store = configureStore({
	reducer: {
		expand: expandReducer,
		currentComponent: currentComponentReducer,
		vehicle: vehicleReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
