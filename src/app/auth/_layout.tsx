import { Stack } from 'expo-router';
import React from 'react';

export default function AuthRoot() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="login" />
			<Stack.Screen name="create-account" />
			<Stack.Screen name="reset-password" />
			<Stack.Screen name="verification" />
			<Stack.Screen name="create-new-pass" />
		</Stack>
	);
}
