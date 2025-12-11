import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { View } from 'react-native';

export default function AuthWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<View style={tw`flex-1 justify-center items-center bg-white p-10`}>
			<Image
				source={require('@/assets/images/full.png')}
				style={tw`w-32 h-32 mb-8`}
				contentFit="contain"
			/>
			<View
				style={tw`flex flex-col w-full justify-center items-center bg-white shadow-xl rounded-xl py-10 px-5 gap-10`}
			>
				{children}
			</View>
		</View>
	);
}
