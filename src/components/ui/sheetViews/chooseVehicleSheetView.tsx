import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef, useState } from 'react';

import { iconRightArrow } from '@/assets/icons';
import { setCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import { collapse, expand } from '@/src/state/slices/expandSlice';
import { setVehicleType } from '@/src/state/slices/vehicleSlice';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import ChooseButton from '../chooseButton';

export default function ChooseVehicleSheetView() {
	const router = useRouter();
	const [selectedVehicle, setSelectedVehicle] = useState<string | null>(
		'Standard'
	);
	const dispatch = useDispatch();
	// ref
	const bottomSheetRef = useRef<BottomSheet>(null);

	const handleSheetChanges = useCallback(
		(index: number) => {
			console.log('handleSheetChanges', index);
			if (index > 0) {
				dispatch(expand());
			} else {
				dispatch(collapse());
				console.log('collapsed');
			}
		},
		[dispatch]
	);

	return (
		<BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
			<BottomSheetView style={tw`flex-1 items-center p-5 flex gap-5`}>
				<View style={tw`flex flex-col items-center`}>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between p-2 w-full ${
							selectedVehicle === 'Standard'
								? 'border-2 border-green-600'
								: 'border-2 border-transparent'
						} rounded-xl`}
						onPress={() => setSelectedVehicle('Standard')}
					>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Image
								source={require('@/assets/images/Car.png')}
								style={tw`w-16 h-16`}
								contentFit="contain"
							/>
							<View style={tw`flex flex-col items-start justify-center`}>
								<Text style={tw`text-sm font-sfprobold`}>Standard</Text>
								<Text style={tw`text-xs font-sfproregular text-gray-800`}>
									10:25am - 1min
								</Text>
								<Text style={tw`text-xs font-sfproregular text-gray-800`}>
									Affordable everyday rides
								</Text>
							</View>
						</View>
						<Text style={tw`text-base font-sfprobold text-green p-2`}>$50</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between p-2 w-full ${
							selectedVehicle === 'Bike'
								? 'border-2 border-green-600'
								: 'border-2 border-transparent'
						} rounded-xl`}
						onPress={() => setSelectedVehicle('Bike')}
					>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Image
								source={require('@/assets/images/Bike.png')}
								style={tw`w-16 h-16`}
								contentFit="contain"
							/>
							<View style={tw`flex flex-col items-start justify-center`}>
								<Text style={tw`text-sm font-sfprobold`}>Bike</Text>
								<Text style={tw`text-xs font-sfproregular text-gray-800`}>
									10:25am - 1min
								</Text>
								<Text style={tw`text-xs font-sfproregular text-gray-800`}>
									Affordable motorcycle rides
								</Text>
							</View>
						</View>
						<Text style={tw`text-base font-sfprobold text-green p-2`}>$30</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between p-2 w-full ${
							selectedVehicle === 'Premium'
								? 'border-2 border-green-600'
								: 'border-2 border-transparent'
						} rounded-xl`}
						onPress={() => setSelectedVehicle('Premium')}
					>
						<View style={tw`flex flex-row items-center gap-2`}>
							<Image
								source={require('@/assets/images/Premium.png')}
								style={tw`w-16 h-16`}
								contentFit="contain"
							/>
							<View style={tw`flex flex-col items-start justify-center`}>
								<Text style={tw`text-sm font-sfprobold`}>Premium</Text>
								<Text style={tw`text-xs font-sfpro text-gray-800`}>
									10:25am - 1min
								</Text>
								<Text style={tw`text-xs font-sfpro text-gray-800`}>
									Affordable luxury rides
								</Text>
							</View>
						</View>
						<Text style={tw`text-base font-sfprobold text-green p-2`}>$80</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={tw`flex flex-row py-1 border-t border-gray-200 items-center w-full justify-between`}
					onPress={() => router.push('/payment')}
				>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Image
							source={require('@/assets/images/Cash.png')}
							style={tw`w-8 h-8`}
							contentFit="contain"
						/>
						<Text style={tw`text-sm font-sfprobold`}>Cash</Text>
					</View>
					<SvgXml xml={iconRightArrow} width={14} height={14} />
				</TouchableOpacity>
				<ChooseButton
					text={`Choose ${selectedVehicle}`}
					onPress={() => {
						dispatch(setVehicleType(selectedVehicle));
						dispatch(setCurrentComponent('confirmPickupLocation'));
					}}
				/>
			</BottomSheetView>
		</BottomSheet>
	);
}
