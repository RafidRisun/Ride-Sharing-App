import tw from '@/src/lib/tailwind';
import React from 'react';
import { TextInput, View } from 'react-native';

export default function PinField() {
	return (
		<View
			style={tw`w-12 h-12 border border-gray-400 rounded-lg justify-center items-center`}
		>
			<TextInput style={tw`w-full h-full text-center`} keyboardType="numeric" />
		</View>
	);
}
