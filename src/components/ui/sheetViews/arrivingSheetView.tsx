import { iconCall, iconDots } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { collapse, expand } from '@/src/state/slices/expandSlice';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import React, { useCallback, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';

export default function ArrivingSheetView() {
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
			snapPoints={['15%', '80%']}
			//keyboardBehavior="interactive"
		>
			<BottomSheetView style={tw`flex-1 items-center p-5 flex gap-5`}>
				<View style={tw`flex flex-col items-center gap-1`}>
					<Text style={tw`text-xl font-sfprobold`}>Pick-up in 3 mins</Text>
					<Text style={tw`text-xs font-sfpro text-center`}>
						Please go to your pick-up location and wait for your ride to arrive
					</Text>
				</View>
				<View
					style={tw`flex flex-row w-full bg-white shadow-md justify-between items-center px-2 py-1 gap-2`}
				>
					<Image
						source={require('../../../../assets/images/Car.png')}
						style={tw`w-16 h-16`}
						contentFit="contain"
					/>
					<View style={tw`flex flex-col items-end justify-center`}>
						<Text style={tw`text-base font-sfpromedium`}>DHM-GA49-2423</Text>
						<Text style={tw`text-sm font-sfpro text-gray-600`}>
							Toyota Axio - Silver
						</Text>
					</View>
				</View>
				<View style={tw`flex flex-row w-full items-center justify-between`}>
					<View style={tw`flex flex-row items-center gap-2`}>
						<Image
							source={require('../../../../assets/images/parrot.png')}
							style={tw`w-12 h-12 rounded-full border-4 border-white shadow-sm`}
							contentFit="cover"
						/>
						<View style={tw`flex flex-col`}>
							<Text style={tw`text-base font-sfpromedium`}>Dr. Gyatt</Text>
							<Text style={tw`text-sm font-sfpro text-gray-600`}>96 Rides</Text>
						</View>
					</View>
					<View style={tw`flex flex-row items-center gap-2`}>
						<TouchableOpacity
							style={tw`w-10 h-10 items-center justify-center bg-white shadow-md rounded-md`}
						>
							<SvgXml xml={iconCall} width={20} height={20} />
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`w-10 h-10 items-center justify-center bg-white shadow-md rounded-md`}
						>
							<SvgXml xml={iconDots} width={20} height={20} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={tw`flex flex-row gap-2`}>
					{/* <KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						keyboardVerticalOffset={80}
						style={{ flex: 1 }}
					> */}
					<TextInput
						style={tw`flex-1 bg-gray-200 rounded-md p-3`}
						placeholder="Type a message"
					/>
					{/* </KeyboardAvoidingView> */}
					<TouchableOpacity style={tw`bg-green rounded-md p-3 justify-center`}>
						<Text style={tw`text-white`}>Send</Text>
					</TouchableOpacity>
				</View>
			</BottomSheetView>
		</BottomSheet>
	);
}
