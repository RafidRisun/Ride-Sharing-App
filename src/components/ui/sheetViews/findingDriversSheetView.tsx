import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { iconDestination, iconPickup } from '@/assets/icons';
import {
	clearCurrentComponent,
	setCurrentComponent,
} from '@/src/state/slices/currentComponentSlice';
import { collapse, expand } from '@/src/state/slices/expandSlice';
import { Image } from 'expo-image';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';

export default function PickDestinationSheetView() {
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
		setTimeout(() => {
			setProgress(25);
		}, 1000);
		setTimeout(() => {
			setProgress(50);
		}, 2000);
		setTimeout(() => {
			setProgress(75);
		}, 3000);
		setTimeout(() => {
			setProgress(100);
		}, 4000);
		setTimeout(() => {}, 6000);
	}, []);

	return (
		<BottomSheet
			ref={bottomSheetRef}
			onChange={handleSheetChanges}
			index={1}
			snapPoints={['15%', '65%', '60%']}
		>
			<TouchableOpacity
				style={tw`absolute top-0 right-5 z-10 bg-blue-300 p-1 rounded-full opacity-20`}
				onPress={() => {
					dispatch(setCurrentComponent('arriving'));
				}}
			>
				<Text>Temporary Button to go to next step</Text>
			</TouchableOpacity>
			<BottomSheetView
				style={tw`flex-1 items-center justify-center flex gap-5 py-5`}
			>
				<Text style={tw`text-xl font-sfprobold`}>Finding nearby drivers</Text>
				<View style={tw`w-full h-1.5 bg-gray-300`}>
					<View style={tw`w-${progress}% h-1.5 bg-green`}></View>
				</View>
				<Image
					source={require('../../../../assets/images/BigAssCar.png')}
					style={tw`w-full h-30`}
					contentFit="contain"
				/>
				<View style={tw`flex w-full flex-col gap-2 px-5`}>
					<View
						style={tw`flex flex-row items-center bg-[#E9E9E9] rounded-sm px-3 py-4 gap-3 w-full`}
					>
						<SvgXml xml={iconPickup} width={20} height={20} />
						<Text>Home</Text>
					</View>
					<View
						style={tw`flex flex-row items-center bg-[#E9E9E9] rounded-sm px-3 py-4 gap-3 w-full`}
					>
						<SvgXml xml={iconDestination} width={22} height={22} />
						<Text>Work</Text>
					</View>
					<View
						style={tw`h-8 border-l-2 border-black absolute left-10.5 top-10`}
					/>
				</View>
				<View style={tw`flex w-full px-5`}>
					<TouchableOpacity
						onPress={() => dispatch(clearCurrentComponent())}
						style={tw`flex w-full p-4 justify-center items-center bg-red-500 mt-4 rounded-md`}
					>
						<Text style={tw`text-white font-sfprobold`}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</BottomSheetView>
		</BottomSheet>
	);
}
