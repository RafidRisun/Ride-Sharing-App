import HeaderWithTitle from '@/src/components/HeaderWithTitle';
import HistoryFlatlist from '@/src/components/ui/Rides/HistoryFlatlist';
import OngoingRidesFlatList from '@/src/components/ui/Rides/OngoingRidesFlatList';
import ScheduledRidesFlatlist from '@/src/components/ui/Rides/ScheduledRidesFlatlist';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Rides() {
	const [selectedTab, setSelectedTab] = useState<
		'ongoing' | 'scheduled' | 'history'
	>('ongoing');

	return (
		<View style={tw`flex-1 items-center bg-white gap-5`}>
			<HeaderWithTitle title="Rides" />
			<View style={tw`flex-1 w-full gap-6`}>
				<View style={tw`px-4`}>
					<View
						style={tw`flex flex-row w-full p-1.5 items-center justify-center border border-gray-400 rounded-md`}
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
				</View>
				{selectedTab === 'ongoing' && (
					<OngoingRidesFlatList data={onGoingRidesData} />
				)}
				{selectedTab === 'scheduled' && (
					<ScheduledRidesFlatlist data={scheduledRidesData ?? []} />
				)}
				{selectedTab === 'history' && (
					<HistoryFlatlist data={historyRidesData ?? []} />
				)}
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

const scheduledRidesData: any[] | null = [
	{
		id: '1',
		driverName: 'Jane Smith',
		vehicle: 'Honda Accord - XYZ789',
		driverImage: require('@/assets/images/parrot.png'),
		scheduledTime: 'Tomorrow at 10:00 AM',
		rating: 4.7,
		vehicleColor: 'Red',
	},
];

const historyRidesData: any[] | null = [
	{
		id: '1',
		driverName: 'Mike Johnson',
		vehicle: 'Ford Focus - LMN456',
		driverImage: require('@/assets/images/parrot.png'),
		rideDate: '2024-03-20',
		rating: 4.9,
		vehicleColor: 'Black',
	},
	{
		id: '2',
		driverName: 'Emily Davis',
		vehicle: 'Chevrolet Malibu - DEF321',
		driverImage: require('@/assets/images/parrot.png'),
		rideDate: '2024-03-18',
		rating: 4.6,
		vehicleColor: 'White',
	},
	{
		id: '3',
		driverName: 'David Wilson',
		vehicle: 'Nissan Altima - GHI654',
		driverImage: require('@/assets/images/parrot.png'),
		rideDate: '2024-03-15',
		rating: 4.8,
		vehicleColor: 'Silver',
	},
];
