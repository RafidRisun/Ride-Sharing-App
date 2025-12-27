import {
	iconBack,
	iconDestination,
	iconPickup,
	iconReceipt,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useCallback, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';

export default function RideDetails() {
	const router = useRouter();
	const bottomSheetRef = useRef<BottomSheet>(null);

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<TouchableOpacity
				style={tw`absolute left-4 top-10 z-10`}
				onPress={() => {
					router.back();
				}}
			>
				<SvgXml xml={iconBack} width={34} height={34} />
			</TouchableOpacity>
			<View style={tw`flex gap-8 w-full items-center bg-white pt-12 pb-4 px-4`}>
				<Text style={tw`font-sfprobold text-lg`}>Ride Details</Text>
				<View style={tw`flex flex-row w-full items-center gap-2`}>
					<View style={tw`flex flex-row items-center gap-4 flex-1`}>
						<Image
							source={require('../../../../assets/images/parrot.png')}
							style={tw`w-14 h-14 rounded-full border-4 border-white shadow`}
							contentFit="cover"
						/>
						<View style={tw`flex flex-col`}>
							<Text style={tw`text-base font-sfpromedium`}>Dr. Gyatt</Text>
							<Text style={tw`text-sm font-sfpro text-gray-600`}>Driver</Text>
						</View>
					</View>
					<View style={tw`px-2 py-1 bg-green bg-opacity-20 rounded-full`}>
						<Text style={tw`text-xs font-sfprobold text-green`}>Completed</Text>
					</View>
				</View>
			</View>
			<Image
				source={require('../../../../assets/images/Map.png')}
				style={tw`w-full flex-1`}
				contentFit="cover"
			/>
			<BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
				<BottomSheetView style={tw`flex w-full items-center p-4 gap-6`}>
					<View
						style={tw`flex flex-row w-full items-center justify-between bg-white px-3 shadow-md rounded-md`}
					>
						<View style={tw`flex flex-col`}>
							<Text style={tw`text-base font-sfprobold`}>
								Toyota HR - V | White
							</Text>
							<Text style={tw`text-sm font-sfpro text-gray-600`}>
								DHM-GA49-2423
							</Text>
						</View>
						<Image
							source={require('../../../../assets/images/CarFlipped.png')}
							style={tw`w-30 h-20`}
							contentFit="contain"
						/>
					</View>
					<View style={tw`flex w-full flex-col gap-2`}>
						<View
							style={tw`flex flex-row items-center rounded-sm px-3 py-2 gap-3 w-full`}
						>
							<SvgXml xml={iconPickup} width={20} height={20} />
							<Text>Pick-up location</Text>
						</View>
						<View
							style={tw`flex flex-row items-center rounded-sm px-3 py-2 gap-3 w-full`}
						>
							<SvgXml xml={iconDestination} width={22} height={22} />
							<Text>Destination</Text>
						</View>
						<View
							style={tw`h-5 border-l-2 border-black absolute left-5.5 top-7.5`}
						/>
						<View
							style={tw`flex flex-col gap-1 absolute top-0 right-0 items-end`}
						>
							<Text style={tw`text-sm font-sfprobold`}>Aug 23</Text>
							<Text style={tw`text-sm font-sfpro text-gray-700`}>2:32 PM</Text>
						</View>
					</View>
					<View
						style={tw`flex flex-row py-1 px-5 pb-2 items-center w-full justify-between`}
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
						<View style={tw`flex flex-col items-center gap-2`}>
							<TouchableOpacity
								style={tw`flex items-center justify-center bg-white h-10 w-10 rounded-full shadow-md`}
								onPress={() => {
									router.push('/(tabs)/rides/receipt');
								}}
							>
								<SvgXml xml={iconReceipt} />
							</TouchableOpacity>
							<Text style={tw`text-xs font-sfpromedium`}>Receipt</Text>
						</View>
					</View>
				</BottomSheetView>
			</BottomSheet>
		</GestureHandlerRootView>
	);
}
