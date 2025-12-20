import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { iconTicked, iconUnticked } from '@/assets/icons';
import { setCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import { collapse, expand } from '@/src/state/slices/expandSlice';
import { useRouter } from 'expo-router';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import ChooseButton from '../chooseButton';

export default function CancelRide() {
	const router = useRouter();
	const [progress, setProgress] = useState(0);
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
	const [selectedReason, setSelectedReason] = useState<string | null>(null);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		dispatch(setCurrentComponent(''));
	// 	}, 3000);
	// }, []);
	return (
		<BottomSheet
			ref={bottomSheetRef}
			onChange={handleSheetChanges}
			index={1}
			snapPoints={['15%', '82%']}
		>
			<BottomSheetView
				style={tw`flex-1 items-center justify-center flex gap-5 py-5`}
			>
				<Text style={tw`text-xl font-sfprobold`}>Cancel Ride</Text>
				<View style={tw`flex w-full flex-col gap-3 px-5`}>
					{reasons.map((reason, index) => (
						<TouchableOpacity
							key={index}
							style={tw`flex flex-row items-center bg-white shadow-sm rounded-lg px-3 py-4 gap-3 w-full`}
							onPress={() => setSelectedReason(reason)}
						>
							<SvgXml
								xml={selectedReason === reason ? iconTicked : iconUnticked}
							/>
							<Text>{reason}</Text>
						</TouchableOpacity>
					))}
				</View>
				<View style={tw`flex w-full px-5`}>
					<ChooseButton
						text={'Cancel Ride'}
						onPress={() => {
							dispatch(setCurrentComponent('cancelRide'));
						}}
					/>
				</View>
			</BottomSheetView>
		</BottomSheet>
	);
}

const reasons = [
	'Change of plans',
	'Found a better ride',
	'Driver is taking too long',
	'Selected wrong vehicle type',
	'Selected wrong drop-off location',
	'Selected wrong pick-up location',
	'Other',
];
