import { createSlice } from '@reduxjs/toolkit';

const vehicleSlice = createSlice({
	name: 'vehicle',
	initialState: {
		type: 'Standard',
	},
	reducers: {
		setVehicleType: (state, action) => {
			state.type = action.payload;
		},
	},
});

export const { setVehicleType } = vehicleSlice.actions;

export default vehicleSlice.reducer;
