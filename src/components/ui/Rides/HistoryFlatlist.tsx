import { iconDestination, iconPickup } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function HistoryFlatlist({ data }: { data: any[] }) {
	return (
		<>
			{data.length === 0 && (
				<View style={tw`flex-1 items-center justify-center`}>
					<Image
						source={require('@/assets/images/noScheduledData.png')}
						style={tw`w-60 h-60`}
						contentFit="contain"
					/>
					<Text style={tw`text-lg font-sfprobold mt-4`}>
						No Scheduled Rides
					</Text>
					<Text style={tw`text-center text-gray-600 mt-2`}>
						You have no scheduled rides at the moment.
					</Text>
					<TouchableOpacity style={tw`mt-6 bg-green px-6 py-3 rounded-md`}>
						<Text style={tw`text-white font-sfprobold`}>Schedule a Ride</Text>
					</TouchableOpacity>
				</View>
			)}
			{data.length > 0 && (
				<FlatList
					data={data}
					keyExtractor={item => item.id}
					style={tw`flex-1 w-full px-4 py-1`}
					contentContainerStyle={tw`gap-4`}
					renderItem={({ item }) => (
						<View
							style={tw`flex flex-col gap-2 p-3 bg-white shadow-md rounded-sm`}
						>
							<View style={tw`flex w-full flex-col gap-2`}>
								<View
									style={tw`flex flex-row items-center rounded-sm px-3 py-4 gap-3 w-full`}
								>
									<SvgXml xml={iconPickup} width={20} height={20} />
									<Text>Pick-up location</Text>
								</View>
								<View
									style={tw`flex flex-row items-center rounded-sm px-3 py-4 gap-3 w-full`}
								>
									<SvgXml xml={iconDestination} width={22} height={22} />
									<Text>Destination</Text>
								</View>
								<View
									style={tw`h-8 border-l-2 border-black absolute left-5.2 top-10`}
								/>
								<View
									style={tw`flex flex-col gap-1 absolute top-0 right-0 items-end`}
								>
									<Text style={tw`text-sm font-sfprobold`}>Aug 23</Text>
									<Text style={tw`text-sm font-sfpro text-gray-700`}>
										2:32 PM
									</Text>
									<View
										style={tw`mt-1 px-2 py-1 bg-green bg-opacity-20 rounded-full`}
									>
										<Text style={tw`text-xs font-sfprobold text-green`}>
											Completed
										</Text>
									</View>
								</View>
							</View>
							<View
								style={tw`flex flex-row items-center justify-between w-full mb-2`}
							>
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
									<View>
										<Text style={tw`font-sfprobold text-sm`}>
											{item.driverName}
										</Text>
										<Text style={tw`text-gray-600 text-xs`}>
											{item.vehicle} | {item.vehicleColor}
										</Text>
									</View>
								</View>
								<Text style={tw`font-sfprobold text-lg text-green`}>$50</Text>
							</View>
							<View
								style={tw`flex flex-row items-center justify-between w-full mt-4 gap-4`}
							>
								<TouchableOpacity
									style={tw`flex flex-row gap-2 flex-1 bg-gray-300 px-4 py-3 rounded-sm items-center justify-center`}
								>
									{/* <SvgXml xml={iconCallGray} /> */}
									<Text style={tw`text-gray-600 font-sfpromedium text-sm`}>
										Rate Driver
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`flex-1 bg-green px-4 py-3 rounded-sm items-center justify-center`}
								>
									<Text style={tw`text-white font-sfpromedium text-sm`}>
										Add Tip
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
				/>
			)}
		</>
	);
}
