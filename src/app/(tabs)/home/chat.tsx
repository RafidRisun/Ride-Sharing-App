import { iconBack } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Chat() {
	const router = useRouter();
	return (
		<SafeAreaView style={tw`flex-1 items-center bg-white`}>
			<View
				style={tw`flex flex-row items-center justify-start gap-2 w-full px-4 py-2`}
			>
				<TouchableOpacity
					style={tw``}
					onPress={() => {
						router.back();
					}}
				>
					<SvgXml xml={iconBack} width={34} height={34} />
				</TouchableOpacity>
				<Image
					source={require('@/assets/images/parrot.png')}
					style={tw`w-12 h-12 rounded-full border-4 border-white shadow-sm ml-2`}
					contentFit="cover"
				/>
				<Text style={tw`text-base font-sfprobold`}>Leo Messi</Text>
			</View>
			<View style={tw`flex-1 w-full px-4 py-2`}>
				<Text style={tw`text-center text-gray-500 mb-4`}>Today</Text>
				<FlatList
					data={texts}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => (
						<View
							style={tw`mb-2 ${
								item.sender === 'user' ? 'items-end' : 'items-start'
							}`}
						>
							<View
								style={tw`max-w-[80%] px-4 py-2 rounded-lg ${
									item.sender === 'user'
										? 'bg-[#F4F4F4] rounded-br-none'
										: 'bg-[#E7F1EB] rounded-bl-none'
								}`}
							>
								<Text style={tw` font-sfpro`}>{item.message}</Text>
							</View>
							<Text style={tw`text-xs text-gray-500 mt-1 font-sfpro`}>
								{item.time}
							</Text>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

const texts = [
	{
		id: 1,
		sender: 'driver',
		message: 'Hello! I am on my way to pick you up.',
		time: '10:00 AM',
	},
	{
		id: 2,
		sender: 'user',
		message: 'Great! I will be waiting at the pickup point.',
		time: '10:02 AM',
	},
	{
		id: 3,
		sender: 'driver',
		message: 'I am stuck in traffic, but I will be there in 5 minutes.',
		time: '10:05 AM',
	},
	{
		id: 4,
		sender: 'user',
		message: 'No worries, take your time.',
		time: '10:05 AM',
	},
];
