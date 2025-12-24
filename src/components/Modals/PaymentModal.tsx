import { iconDestination, iconPickup } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import ChooseButton from '../ui/chooseButton';

export default function PaymentModal({
	setSuccessModal,
	setPayModalVisible,
}: {
	setSuccessModal: (visible: boolean) => void;
	setPayModalVisible: (visible: boolean) => void;
}) {
	return (
		<View style={tw`flex-1 items-center justify-center bg-black bg-opacity-20`}>
			<View
				style={tw`flex w-80 bg-white rounded-lg items-center justify-start p-4 z-50`}
			>
				<Text style={tw`text-lg font-sfprobold mb-6`}>Pay Amount</Text>
				<View style={tw`flex w-full flex-col gap-2 mb-4`}>
					<View
						style={tw`flex flex-row items-center rounded-sm px-3 py-4 gap-3 w-full`}
					>
						<SvgXml xml={iconPickup} width={20} height={20} />
						<Text>Pick-up location</Text>
					</View>
					<View
						style={tw`flex flex-row items-center rounded-sm px-3 py-4 gap-3 w-full`}
					>
						<SvgXml xml={iconDestination} width={22} height={22} />
						<Text>Destination</Text>
					</View>
					<View
						style={tw`h-8 border-l-2 border-black absolute left-5.2 top-10`}
					/>
				</View>
				<View
					style={tw`flex w-full flex-row items-center justify-between px-3 mb-4`}
				>
					<Text style={tw`text-sm font-sfpromedium`}>
						23 Mar 2024 | 2:32 PM
					</Text>
					<Text style={tw`text-base font-sfprobold text-green`}>$25.00</Text>
				</View>
				<ChooseButton
					text="Pay Now"
					onPress={() => {
						setPayModalVisible(false);
						setSuccessModal(true);
					}}
				/>
			</View>
		</View>
	);
}
