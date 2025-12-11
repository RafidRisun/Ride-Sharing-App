import { createSlice } from '@reduxjs/toolkit';

const currentComponentSlice = createSlice({
	name: 'currentComponent',
	initialState: ['planTrip'],
	reducers: {
		setCurrentComponent: (state, action) => {
			state.push(action.payload);
		},
		returnFromCurrentComponent: state => {
			state.pop();
		},
		clearCurrentComponent: state => {
			state.length = 0;
			state.push('planTrip');
		},
	},
});

export const {
	setCurrentComponent,
	clearCurrentComponent,
	returnFromCurrentComponent,
} = currentComponentSlice.actions;

export default currentComponentSlice.reducer;
