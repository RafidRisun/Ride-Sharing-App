import { iconDestinationGreen } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { setCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import { collapse, expand } from '@/src/state/slices/expandSlice';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import ChooseButton from '../chooseButton';

export default function ConfirmPickupLocationSheetView() {
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
					<Text style={tw`text-xl font-sfprobold`}>
						Confirm the pick-up location
					</Text>
				</View>
				<View style={tw`flex flex-row w-full items-center p-2 gap-2`}>
					<SvgXml xml={iconDestinationGreen} width={20} height={20} />
					<Text style={tw`text-base font-sfpromedium`}>Home</Text>
				</View>
				<ChooseButton
					text="Choose Pick-up"
					onPress={() => {
						dispatch(setCurrentComponent('findingDrivers'));
					}}
				/>
			</BottomSheetView>
		</BottomSheet>
	);
}
