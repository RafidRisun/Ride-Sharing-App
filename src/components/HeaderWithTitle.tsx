import React from 'react';
import { Text, View } from 'react-native';
import tw from '../lib/tailwind';

export default function HeaderWithTitle({ title }: { title: string }) {
	return (
		<View
			style={tw`flex flex-col w-full items-center justify-end p-3 bg-green rounded-b-2xl`}
		>
			<Text style={tw`text-white text-2xl font-sfpromedium mt-8 mb-5`}>
				{title}
			</Text>
		</View>
	);
}
