import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { iconCalendar, iconDestination, iconPickup } from '@/assets/icons';
import { setCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import { collapse, expand } from '@/src/state/slices/expandSlice';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import ChooseButton from '../chooseButton';

export default function PickDestinationSheetView() {
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
		<BottomSheet
			ref={bottomSheetRef}
			onChange={handleSheetChanges}
			index={1}
			snapPoints={['15%', '47%', '60%']}
		>
			<BottomSheetView style={tw`flex-1 items-center p-5 flex gap-5`}>
				<View style={tw`flex flex-col items-center gap-1`}>
					<Text style={tw`text-xl font-sfprobold`}>Pick your destination</Text>
					<Text style={tw`text-sm font-sfpro`}>
						Tap in the map to set your destination
					</Text>
				</View>
				<View style={tw`flex w-full flex-col gap-2`}>
					<TouchableOpacity
						style={tw`flex flex-row gap-2 p-2 bg-[#E9E9E9] rounded-full self-start`}
					>
						<SvgXml xml={iconCalendar} width={15} height={15} />
						<Text style={tw`font-sfpro text-xs`}>Pick-up Later</Text>
					</TouchableOpacity>
					<View
						style={tw`flex flex-row items-center border border-gray-600 bg-[#E9E9E9] rounded-sm px-3 py-2 gap-3 w-full`}
					>
						<SvgXml xml={iconPickup} width={20} height={20} />
						<TextInput style={tw`w-full`} placeholder="Pick-up location" />
					</View>
					<View
						style={tw`flex flex-row items-center border border-gray-600 bg-[#E9E9E9] rounded-sm px-3 py-2 gap-3 w-full`}
					>
						<SvgXml xml={iconDestination} width={22} height={22} />
						<TextInput style={tw`w-full`} placeholder="Destination" />
					</View>
					<View
						style={tw`h-10 border-l-2 border-black absolute left-5.5 top-20`}
					/>
				</View>
				<ChooseButton
					text="Choose Destination"
					onPress={() => {
						dispatch(setCurrentComponent('chooseVehicle'));
					}}
				/>
			</BottomSheetView>
		</BottomSheet>
	);
}
