import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';
import ChooseButton from '../ui/chooseButton';

export default function SuccessModal({
	setSuccessModal,
}: {
	setSuccessModal: (visible: boolean) => void;
}) {
	return (
		<View style={tw`flex-1 items-center justify-center bg-black bg-opacity-20`}>
			<View
				style={tw`flex w-80 bg-white rounded-lg items-center justify-start p-4 gap-4 z-50`}
			>
				<Text style={tw`text-lg font-sfprobold mb-6`}>Payment Successful!</Text>
				<ChooseButton
					text="Add Tip"
					onPress={() => {
						setSuccessModal(false);
					}}
				/>
				<ChooseButton
					text="Rate your Driver"
					onPress={() => {
						setSuccessModal(false);
					}}
				/>
			</View>
		</View>
	);
}
