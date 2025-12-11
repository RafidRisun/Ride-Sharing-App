import { Stack } from 'expo-router';
import React from 'react';

export default function PaymentLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerTitle: 'Payment Options',
					headerTitleAlign: 'center',
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name="addCard"
				options={{
					headerTitle: 'Add Payment',
					headerTitleAlign: 'center',
					headerShadowVisible: false,
				}}
			/>
		</Stack>
	);
}
