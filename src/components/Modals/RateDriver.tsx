import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

export default function RateDriver({
	setRateDriverModalVisible,
}: {
	setRateDriverModalVisible: (visible: boolean) => void;
}) {
	const [rating, setRating] = useState(0);
	return (
		<View style={tw`flex-1 items-center justify-center bg-black bg-opacity-20`}>
			<View
				style={tw`flex gap-6 w-80 bg-white rounded-lg items-center justify-start p-4 z-50`}
			>
				<Text style={tw`text-lg font-sfprobold`}>Rate Your Driver</Text>
				<View style={tw`flex w-full items-center justify-center gap-2`}>
					<Image
						source={require('../../../assets/images/parrot.png')}
						style={tw`w-14 h-14 rounded-full border-4 border-white shadow-md`}
						contentFit="cover"
					/>
					<Text style={tw`font-sfprobold`}>John Doe</Text>
				</View>
				<StarRating rating={rating} onChange={setRating} starSize={40} />
				<View style={tw`flex w-full flex-row gap-4`}>
					<TouchableOpacity
						onPress={() => {
							setRateDriverModalVisible(false);
						}}
						style={tw`flex flex-1 p-4 justify-center items-center bg-white border border-gray-400 rounded-md`}
					>
						<Text style={tw` font-sfprobold`}>Skip</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setRateDriverModalVisible(false);
						}}
						style={tw`flex flex-1 p-4 justify-center items-center bg-green rounded-md`}
					>
						<Text style={tw`text-white font-sfprobold`}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
