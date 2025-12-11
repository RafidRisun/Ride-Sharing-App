import { Stack } from 'expo-router';
import React from 'react';

export default function SavedPlacesLayout() {
	return (
		<Stack
			screenOptions={{
				headerShadowVisible: false,
				headerTitle: 'Saved Places',
				headerTitleAlign: 'center',
			}}
		>
			<Stack.Screen name="index" />
		</Stack>
	);
}
