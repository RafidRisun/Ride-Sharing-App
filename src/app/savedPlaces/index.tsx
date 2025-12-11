import HomeList from '@/src/components/ui/homeList';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { View } from 'react-native';

export default function Index() {
	return (
		<View style={tw`flex-1 items-center justify-start p-5 bg-white`}>
			<View style={tw`flex flex-col w-full items-center justify-center gap-3`}>
				{savedPlaces.map((trip, index) => (
					<HomeList
						key={index}
						location={trip.location}
						address={trip.address}
						starred={trip.starred}
						distance={trip.distance}
					/>
				))}
			</View>
		</View>
	);
}

const savedPlaces = [
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
		starred: true,
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
		starred: true,
	},
	{
		id: 5,
		location: 'New Place',
		address: 'New Address, Dhaka',
		distance: 3.0,
		starred: true,
	},
];
