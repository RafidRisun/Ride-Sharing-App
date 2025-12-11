import tw from '@/src/lib/tailwind';
import Checkbox from 'expo-checkbox';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
	const [cashChecked, setCashChecked] = useState(true);
	const [cardChecked, setCardChecked] = useState(false);
	const router = useRouter();

	const handleCashCheckbox = () => {
		setCashChecked(true);
		setCardChecked(false);
	};
	const handleCardCheckbox = () => {
		setCardChecked(true);
		setCashChecked(false);
	};

	return (
		<View style={tw`flex-1 items-start justify-start gap-2 p-5 bg-white`}>
			<Text style={tw`text-lg font-sfpromedium`}>Payment methods</Text>
			<View
				style={tw`flex flex-row shadow-md bg-white w-full items-center justify-between p-5 gap-2`}
			>
				<View style={tw`flex flex-row items-center gap-3`}>
					<Image
						source={require('@/assets/images/Cash.png')}
						style={tw`w-10 h-10`}
						contentFit="contain"
					/>
					<Text style={tw`text-sm font-sfprobold`}>Cash</Text>
				</View>
				<Checkbox
					style={tw``}
					value={cashChecked}
					onValueChange={handleCashCheckbox}
					color={cashChecked ? 'green' : undefined}
				/>
			</View>
			<View
				style={tw`flex flex-row shadow-md bg-white w-full items-center justify-between p-5 gap-2`}
			>
				<View style={tw`flex flex-row items-center gap-3`}>
					<Image
						source={require('@/assets/images/visa.png')}
						style={tw`w-10 h-10`}
						contentFit="contain"
					/>
					<View style={tw`flex flex-col`}>
						<Text style={tw`text-sm font-sfpromedium`}>{cardInfo.number}</Text>
						<Text style={tw`text-xs font-sfpro`}>
							Expires at {cardInfo.expiry}
						</Text>
					</View>
				</View>
				<Checkbox
					style={tw``}
					value={cardChecked}
					onValueChange={handleCardCheckbox}
					color={cardChecked ? 'green' : undefined}
				/>
			</View>
			<TouchableOpacity
				style={tw`p-3 w-full flex flex-row items-center gap-3`}
				onPress={() => {
					router.push('/payment/addCard');
				}}
			>
				<Text style={tw`text-2xl font-sfprobold`}>+</Text>
				<Text style={tw`text-base font-sfprobold`}>Add Payment Method</Text>
			</TouchableOpacity>
		</View>
	);
}

const cardInfo = {
	number: '**** **** **** 1234',
	expiry: '12/24',
	holder: 'John Doe',
};
