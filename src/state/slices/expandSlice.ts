import { createSlice } from '@reduxjs/toolkit';

const expandSlice = createSlice({
	name: 'expand',
	initialState: {
		expanded: false,
	},
	reducers: {
		expand: state => {
			state.expanded = true;
		},
		collapse: state => {
			state.expanded = false;
		},
	},
});

export const { expand, collapse } = expandSlice.actions;
export default expandSlice.reducer;
