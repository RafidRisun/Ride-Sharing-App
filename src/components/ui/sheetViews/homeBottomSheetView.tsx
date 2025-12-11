import tw from '@/src/lib/tailwind';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import {
	iconCalendar,
	iconDestination,
	iconPickup,
	iconSavedPlaces,
	iconSearch,
	iconSetLocation,
} from '@/assets/icons';
import { setCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import { collapse, expand } from '@/src/state/slices/expandSlice';
import { RootState } from '@/src/state/store';
import { useRouter } from 'expo-router';
import { SvgXml } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import HomeList from '../homeList';

export default function HomeBottomSheetView() {
	const router = useRouter();
	const expanded = useSelector((state: RootState) => state.expand.expanded);
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
			index={0}
			snapPoints={['40%', '85%']}
		>
			<BottomSheetView style={tw`flex-1 items-center p-5 flex gap-5`}>
				<Text style={tw`text-xl font-sfprobold`}>Plan your trip</Text>
				{!expanded && (
					<TouchableOpacity
						style={tw`flex flex-row items-center border border-gray-600 bg-[#E9E9E9] rounded-sm p-2 gap-2 w-full`}
						onPress={() => {
							bottomSheetRef.current?.expand();
							dispatch(expand());
						}}
					>
						<SvgXml xml={iconSearch} width={28} height={28} />
						<Text style={tw`w-full text-gray-600`}>Enter your destination</Text>
					</TouchableOpacity>
				)}
				{expanded && (
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
				)}
				<View
					style={tw`flex flex-col w-full items-center justify-center gap-3`}
				>
					{recentTrips.slice(0, 3).map((trip, index) => (
						<HomeList
							key={index}
							location={trip.location}
							address={trip.address}
							starred={trip.starred}
							distance={trip.distance}
						/>
					))}
					<TouchableOpacity
						style={tw`w-full flex flex-row items-center gap-3 bg-white p-3 shadow-md rounded-sm`}
						onPress={() => router.push('/savedPlaces')}
					>
						<View style={tw`flex flex-row items-center gap-3`}>
							<SvgXml xml={iconSavedPlaces} width={37} height={37} />
							<Text style={tw`font-sfpromedium text-base`}>Saved Places</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`w-full flex flex-row items-center gap-3 bg-white p-3 shadow-md rounded-sm`}
						onPress={() => dispatch(setCurrentComponent('pickDestination'))}
					>
						<View style={tw`flex flex-row items-center gap-3`}>
							<SvgXml xml={iconSetLocation} width={37} height={37} />
							<Text style={tw`font-sfpromedium text-base`}>
								Set Location on map
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</BottomSheetView>
		</BottomSheet>
	);
}

const recentTrips = [
	{
		id: 1,
		location: 'Home',
		address: 'Malibagh, Dhaka',
		distance: 1.2,
		starred: true,
	},
	{
		id: 2,
		location: 'Office',
		address: 'Mohakhali, Dhaka',
		distance: 2.5,
		starred: false,
	},
	{
		id: 3,
		location: 'ThreeSquare',
		address: 'Banani, Dhaka',
		distance: 2.8,
		starred: true,
	},
	{
		id: 4,
		location: 'Aronnyo Jon',
		address: 'Elephant Road, Dhaka',
		distance: 4.6,
		starred: false,
	},
];
