import { iconCLose } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import ChooseButton from '../ui/chooseButton';

export default function TipModal({
	setTipModalVisible,
}: {
	setTipModalVisible: (visible: boolean) => void;
}) {
	const [customTip, setCustomTip] = useState(false);
	return (
		<View style={tw`flex-1 items-center justify-center bg-black bg-opacity-20`}>
			<View
				style={tw`flex w-80 bg-white rounded-lg items-center justify-start p-4 gap-4 z-50`}
			>
				<TouchableOpacity
					style={tw`absolute top-2 right-2`}
					onPress={() => setTipModalVisible(false)}
				>
					<SvgXml xml={iconCLose} />
				</TouchableOpacity>
				<Text style={tw`text-lg font-sfprobold mb-4`}>Add a tip for John</Text>
				{customTip ? (
					<TextInput
						style={tw`w-full h-12 text-center bg-gray-200 rounded-md px-3`}
						placeholder="$0.00"
						keyboardType="numeric"
					/>
				) : (
					<View style={tw`w-full flex flex-row justify-between px-6 gap-2`}>
						<TouchableOpacity
							style={tw`flex px-3 py-1 border border-gray-400 rounded-full`}
						>
							<Text>$2</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex px-3 py-1 border border-gray-400 rounded-full`}
						>
							<Text>$5</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex px-3 py-1 border border-gray-400 rounded-full`}
							onPress={() => setCustomTip(true)}
						>
							<Text>Custom</Text>
						</TouchableOpacity>
					</View>
				)}
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
