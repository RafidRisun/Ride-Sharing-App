import { iconHistory, iconStar, iconStarDisabled } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { setCurrentComponent } from '@/src/state/slices/currentComponentSlice';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';

interface Props {
	location: string;
	address: string;
	starred: boolean;
	distance: number;
}

export default function HomeList({
	location,
	address,
	starred,
	distance,
}: Props) {
	const dispatch = useDispatch();
	return (
		<TouchableOpacity
			// key={index}
			style={tw`w-full flex flex-row items-center justify-between gap-3 bg-white p-3 shadow-md rounded-sm`}
			onPress={() => dispatch(setCurrentComponent('chooseVehicle'))}
		>
			<View style={tw`flex flex-row items-center gap-3`}>
				<SvgXml xml={iconHistory} width={37} height={37} />
				<View>
					<Text style={tw`font-sfpromedium text-base`}>{location}</Text>
					<Text style={tw`font-sfpro text-sm`}>{address}</Text>
				</View>
			</View>
			<View style={tw`flex flex-col items-center justify-center gap-2`}>
				<SvgXml
					xml={starred ? iconStar : iconStarDisabled}
					width={24}
					height={24}
				/>
				<Text style={tw`font-sfpro text-xs text-gray-500`}>{distance}km</Text>
			</View>
		</TouchableOpacity>
	);
}
