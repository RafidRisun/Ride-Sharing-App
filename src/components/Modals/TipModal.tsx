import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import ChooseButton from '../ui/chooseButton';

export default function TipModal({
	setTipModalVisible,
}: {
	setTipModalVisible: (visible: boolean) => void;
}) {
	return (
		<View style={tw`flex-1 items-center justify-center bg-black bg-opacity-20`}>
			<View
				style={tw`flex w-80 bg-white rounded-lg items-center justify-start p-4 gap-4 z-50`}
			>
				<Text style={tw`text-lg font-sfprobold mb-4`}>Add a tip for John</Text>
				<TextInput
					style={tw`w-full h-12 text-center bg-gray-200 rounded-md px-3`}
					placeholder="$0.00"
					keyboardType="numeric"
				/>
				<ChooseButton
					text="Add Tip"
					onPress={() => {
						setTipModalVisible(false);
					}}
				/>
			</View>
		</View>
	);
}
