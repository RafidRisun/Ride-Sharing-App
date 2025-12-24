import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { iconDestination, iconPickup } from '@/assets/icons';
import { setCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import { collapse, expand } from '@/src/state/slices/expandSlice';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import ChooseButton from '../chooseButton';

export default function TripDetails() {
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

	useEffect(() => {
		setTimeout(() => {}, 3000);
	}, []);
	return (
		<BottomSheet
			ref={bottomSheetRef}
			onChange={handleSheetChanges}
			index={1}
			snapPoints={['15%', '65%', '60%']}
		>
			<BottomSheetView
				style={tw`flex-1 items-center justify-center flex gap-5 py-5`}
			>
				<Text style={tw`text-xl font-sfprobold`}>Trip Progress</Text>
				<View style={tw`flex w-full flex-col gap-2 px-5`}>
					<View
						style={tw`flex flex-row items-center bg-[#E9E9E9] rounded-sm px-3 py-4 gap-3 w-full`}
					>
						<SvgXml xml={iconPickup} width={20} height={20} />
						<Text>Pick-up location</Text>
					</View>
					<View
						style={tw`flex flex-row items-center bg-[#E9E9E9] rounded-sm px-3 py-4 gap-3 w-full`}
					>
						<SvgXml xml={iconDestination} width={22} height={22} />
						<Text>Destination</Text>
					</View>
					<View
						style={tw`h-8 border-l-2 border-black absolute left-10.5 top-10`}
					/>
				</View>
				<TouchableOpacity
					style={tw`flex flex-row py-1 px-5 items-center w-full justify-between`}
					onPress={() => router.push('/payment')}
				>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Image
							source={require('@/assets/images/Cash.png')}
							style={tw`w-8 h-8`}
							contentFit="contain"
						/>
						<View style={tw`flex flex-col`}>
							<Text style={tw`text-sm font-sfprobold text-green`}>$50</Text>
							<Text style={tw`text-xs font-sfpromedium`}>cash</Text>
						</View>
					</View>
				</TouchableOpacity>
				<View style={tw`flex w-full px-5`}>
					<ChooseButton
						text={'Cancel Ride'}
						onPress={() => {
							dispatch(setCurrentComponent('cancelRide'));
						}}
					/>
					{/* <TouchableOpacity
						onPress={() => dispatch(clearCurrentComponent())}
						style={tw`flex w-full p-4 justify-center items-center bg-white mt-4 rounded-md border border-green`}
					>
						<Text style={tw`text-green font-sfprobold`}>Close</Text>
					</TouchableOpacity> */}
				</View>
			</BottomSheetView>
		</BottomSheet>
	);
}
