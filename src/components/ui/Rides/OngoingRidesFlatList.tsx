import { iconCallGray } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function OngoingRidesFlatList({ data }: { data: any[] }) {
	const router = useRouter();
	return (
		<FlatList
			data={data}
			keyExtractor={item => item.id}
			style={tw`flex-1 w-full px-4 py-1`}
			contentContainerStyle={tw`gap-4`}
			renderItem={({ item }) => (
				<View style={tw`flex flex-col p-3 bg-white shadow-md rounded-sm`}>
					<View style={tw`flex flex-row items-center justify-between w-full`}>
						<View style={tw`flex flex-row items-center gap-4`}>
							<View style={tw`pb-2`}>
								<Image
									source={item.driverImage}
									style={tw`w-15 h-15 rounded-full border-4 border-white shadow-md`}
									contentFit="cover"
								/>
								<Text
									style={tw`text-black text-xs flex px-2 py-1 bg-white rounded-full absolute bottom-[-1] left-1/2 transform -translate-x-1/2 shadow-md`}
								>
									⭐ {item.rating}
								</Text>
							</View>
							<View style={tw`flex flex-col gap-2`}>
								<Text style={tw`font-sfprobold text-sm`}>
									{item.driverName}
								</Text>
								<Text style={tw`text-gray-600 text-xs`}>
									{item.vehicle} | {item.vehicleColor}
								</Text>
							</View>
						</View>
						<View style={tw`flex h-10 justify-end items-end`}>
							<Text style={tw`font-sfpromedium text-xs text-gray-700`}>
								Arrive in {item.status}
							</Text>
						</View>
					</View>
					<View
						style={tw`flex flex-row items-center justify-between w-full mt-4 gap-4`}
					>
						<TouchableOpacity
							style={tw`flex flex-row gap-2 flex-1 bg-gray-300 px-4 py-3 rounded-sm items-center justify-center`}
						>
							<SvgXml xml={iconCallGray} />
							<Text style={tw`text-gray-600 font-sfpromedium text-sm`}>
								Emergency
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex-1 bg-green px-4 py-3 rounded-sm items-center justify-center`}
							onPress={() => router.push('/(tabs)/rides/trackScreen')}
						>
							<Text style={tw`text-white font-sfpromedium text-sm`}>
								Live Tracking
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		/>
	);
}
