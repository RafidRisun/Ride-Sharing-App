import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function ChooseButton({
	text,
	onPress,
}: {
	text: string;
	onPress?: () => void;
}) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={tw`flex w-full p-4 justify-center items-center bg-green rounded-md`}
		>
			<Text style={tw`text-white font-sfprobold`}>{text}</Text>
		</TouchableOpacity>
	);
}
