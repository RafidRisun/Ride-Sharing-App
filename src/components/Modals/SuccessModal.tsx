import { iconCLose } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import ChooseButton from '../ui/chooseButton';

export default function SuccessModal({
	setSuccessModal,
	setRateDriverModalVisible,
	setTipModalVisible,
}: {
	setSuccessModal: (visible: boolean) => void;
	setRateDriverModalVisible: (visible: boolean) => void;
	setTipModalVisible: (visible: boolean) => void;
}) {
	return (
		<View style={tw`flex-1 items-center justify-center bg-black bg-opacity-20`}>
			<View
				style={tw`flex w-80 bg-white rounded-lg items-center justify-start p-4 gap-4 z-50`}
			>
				<TouchableOpacity
					style={tw`absolute top-2 right-2`}
					onPress={() => setSuccessModal(false)}
				>
					<SvgXml xml={iconCLose} />
				</TouchableOpacity>
				<Text style={tw`text-lg font-sfprobold mb-6`}>Payment Successful!</Text>
				<ChooseButton
					text="Add Tip"
					onPress={() => {
						setSuccessModal(false);
						setTipModalVisible(true);
					}}
				/>
				<ChooseButton
					text="Rate your Driver"
					onPress={() => {
						setSuccessModal(false);
						setRateDriverModalVisible(true);
					}}
				/>
			</View>
		</View>
	);
}
