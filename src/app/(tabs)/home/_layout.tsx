import { Stack } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="chat" />
			<Stack.Screen
				name="payModal"
				options={{ presentation: 'modal', headerShown: false }}
			/>
		</Stack>
	);
}
