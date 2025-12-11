import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Onboarding2() {
	const router = useRouter();
	return (
		<View style={tw`flex-1 justify-center items-center bg-white`}>
			<View style={tw`flex-1 w-full items-center justify-center`}>
				<Image
					source={require('../../../assets/images/onboarding2.png')}
					style={tw`w-96 h-full bg-white mt-11`}
					contentFit="contain"
				/>
			</View>
			<View style={tw`flex-1 w-full items-center justify-end gap-8 relative`}>
				<Image
					source={require('../../../assets/images/car2.png')}
					style={tw`w-full h-full bg-white absolute bottom-0`}
					contentFit="cover"
				/>
				<View style={tw`flex flex-col w-72 items-center justify-center gap-3`}>
					<Text style={tw`text-xl font-sfpromedium text-white`}>
						Track your driver in real-time
					</Text>
					<Text style={tw`text-base font-sfpro text-white text-center`}>
						See your driver on the map until they arrive
					</Text>
				</View>
				<TouchableOpacity
					style={tw`border-2 border-white rounded-full mb-20`}
					onPress={() => router.push('/onboarding/onboarding3')}
				>
					<View
						style={tw`px-24 py-3 bg-green-500 rounded-full relative bottom-1 right-1`}
					>
						<Text style={tw`text-white text-lg`}>Next</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}
