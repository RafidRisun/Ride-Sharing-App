import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
	const router = useRouter();
	const [selectedRole, setSelectedRole] = React.useState<string | null>(null);

	return (
		<View style={tw`flex-1 justify-center items-center bg-white px-6`}>
			<View>
				<Text style={tw`text-4xl font-sfprobold text-left text-gray-800`}>
					Choose your Role below
				</Text>
				<Image
					source={require('../../../assets/images/arrow.png')}
					style={tw`w-32 h-22 absolute top-10 right-9`}
					contentFit="contain"
				/>
			</View>
			<TouchableOpacity
				style={tw`flex w-full justify-center items-center`}
				onPress={() => {
					setSelectedRole('passenger');
					router.push('/onboarding/onboarding1');
				}}
			>
				<Image
					source={require('../../../assets/images/passenger.png')}
					style={tw`w-full h-74`}
					contentFit="contain"
				/>
			</TouchableOpacity>
			<Text style={tw`font-sfprobold text-3xl`}>Or</Text>
			<TouchableOpacity
				style={tw`flex w-full justify-center items-center`}
				onPress={() => {
					setSelectedRole('driver');
					router.push('/onboarding/onboarding1');
				}}
			>
				<Image
					source={require('../../../assets/images/driver.png')}
					style={tw`w-full h-64`}
					contentFit="contain"
				/>
			</TouchableOpacity>
		</View>
	);
}
