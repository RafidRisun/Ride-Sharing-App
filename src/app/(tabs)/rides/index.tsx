import HeaderWithTitle from '@/src/components/HeaderWithTitle';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export default function Rides() {
	const [selectedTab, setSelectedTab] = useState<
		'ongoing' | 'scheduled' | 'history'
	>('ongoing');

	return (
		<View style={tw`flex-1 items-center bg-white gap-5`}>
			<HeaderWithTitle title="Rides" />
			<View style={tw`flex-1 w-full px-4 gap-4`}>
				<View
					style={tw`flex flex-row w-full p-1.5 items-center justify-center border border-gray-500 rounded-md gap-2`}
				>
					{['ongoing', 'scheduled', 'history'].map(status => (
						<TouchableOpacity
							key={status}
							style={tw`flex flex-1 items-center justify-center bg-${
								selectedTab === status ? 'green' : ''
							} rounded-sm px-4 py-2`}
							onPress={() =>
								setSelectedTab(status as 'ongoing' | 'scheduled' | 'history')
							}
						>
							<Text
								style={tw`font-sfpromedium text-${
									selectedTab === status ? 'white' : 'black'
								}`}
							>
								{status.charAt(0).toUpperCase() + status.slice(1)}
							</Text>
						</TouchableOpacity>
					))}
				</View>
				<FlatList
					data={onGoingRidesData}
					keyExtractor={item => item.id}
					style={tw`flex-1 w-full px-1`}
					renderItem={({ item }) => (
						<View
							style={tw`flex flex-row items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4`}
						>
							<View style={tw`flex flex-row items-center gap-4`}>
								<Image
									source={item.driverImage}
									style={tw`w-13 h-13 rounded-full border-4 border-white shadow-md`}
									contentFit="cover"
								/>
								<View>
									<Text style={tw`font-sfpromedium text-lg`}>
										{item.driverName}
									</Text>
									<Text style={tw`text-gray-600`}>{item.vehicle}</Text>
									<Text style={tw`text-gray-600`}>
										Color: {item.vehicleColor}
									</Text>
								</View>
							</View>
							<View style={tw`items-end`}>
								<Text style={tw`font-sfpromedium text-lg`}>{item.status}</Text>
								<Text style={tw`text-yellow-500`}>⭐ {item.rating}</Text>
							</View>
						</View>
					)}
				/>
			</View>
		</View>
	);
}

const onGoingRidesData = [
	{
		id: '1',
		driverName: 'John Doe',
		vehicle: 'Toyota Camry - ABC123',
		driverImage: require('@/assets/images/parrot.png'),
		status: '3 mins',
		rating: 4.5,
		vehicleColor: 'Blue',
	},
];
