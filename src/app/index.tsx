import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import tw from '../lib/tailwind';

export default function Index() {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.replace('/onboarding');
		}, 3500);
	});

	return (
		<View style={tw`flex-1 justify-center items-center bg-white`}>
			<Animated.View entering={FadeIn.delay(500).duration(1000)}>
				<Image
					source={require('../../assets/images/splash-icon.png')}
					style={tw`w-50 h-50`}
					contentFit="contain"
				/>
			</Animated.View>
			<Animated.View entering={FadeInDown.delay(500).duration(1000)}>
				<View style={tw`flex flex-row items-center justify-center mt-4 w-40`}>
					<Text style={tw`text-4xl font-sfprobold text-green-500`}>Tuende</Text>
					<Text style={tw`text-4xl font-sfprobold text-yellow-500`}>Ride</Text>
				</View>
			</Animated.View>
		</View>
	);
}
