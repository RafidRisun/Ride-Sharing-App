import { iconBack } from '@/assets/icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

export default function HeaderWithBackButton({ title }: { title?: string }) {
	const router = useRouter();
	return (
		<View
			style={tw`flex flex-row w-full h-26 pt-6 bg-white items-center justify-center gap-2`}
		>
			<TouchableOpacity
				style={tw`absolute left-4 bottom-6`}
				onPress={() => {
					router.back();
				}}
			>
				<SvgXml xml={iconBack} width={34} height={34} />
			</TouchableOpacity>
			<Text style={tw`font-sfprobold text-lg`}>{title}</Text>
		</View>
	);
}
