import HeaderWithBackButton from '@/src/components/HeaderWithBackButton';
import React from 'react';
import { Text, View } from 'react-native';

export default function PersonalInformation() {
	return (
		<View
			style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
		>
			<HeaderWithBackButton title="Personal Information" />
			<Text>P</Text>
		</View>
	);
}
